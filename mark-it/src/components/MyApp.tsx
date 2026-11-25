import Nav from './Nav';
import { useStepComponents } from '../StepConfiguration';
import React, { useEffect, useRef } from 'react';
import useAddSequenceStore, { useAuthStore } from '../ZustandStore';
import ItemPageContainer from './ItemPageContainer';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';


const MyApp: React.FC = () => {
  const stepComponents = useStepComponents();
  const currentStep = useAddSequenceStore((state) => state.currentStep);
  const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);
  const dumpWorkingItem = useAddSequenceStore(
    (state) => state.dumpWorkingItem
  );
  const titlePreview = useAddSequenceStore((state) => state.titlePreview);
  const setTitle = useAddSequenceStore((state) => state.setTitle);
  const descriptionPreview = useAddSequenceStore(
    (state) => state.descriptionPreview
  );
  const setDescription = useAddSequenceStore(
    (state) => state.setDescription
  );
  const previousStepRef = useRef<typeof currentStep | null>(null);
  const setQRCode = useAddSequenceStore((state) => state.setQRCode);
  const itemPageVisible = useAddSequenceStore((state) => state.itemPageVisible);
  const setItemPageVisible = useAddSequenceStore(
    (state) => state.setItemPageVisible
  );
  const user = useAuthStore((state) => state.user);
  const setItemID = useAddSequenceStore((state) => state.setItemID);

  // Handle QR codes supplied through URLs, either opening an existing item
  // or starting the add-item workflow for a new one.
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const qrCode = queryParams.get('qrCode');

    if (qrCode) {
      const searchItemInFirestore = async () => {
        try {
          const itemDocRef = doc(db, 'Items', qrCode);
          const docSnapshot = await getDoc(itemDocRef);

          if (docSnapshot.exists()) {
            // Existing item: decide whether it can be viewed based on its action type and owner.
            console.log(docSnapshot.data().userID);
            console.log('DB hit!');

            const actionType = docSnapshot.data().actionType;

            if (actionType === 'sell' || actionType === 'rent') {
              setItemID(qrCode);
              setItemPageVisible(true);
            } else if (actionType === 'store') {
              // Stored items are only viewable through this flow by their owner.
              if (user && user.uid === docSnapshot.data().userID) {
                setItemID(qrCode);
                setItemPageVisible(true);
              } else {
                console.log(
                  `User: ${user}, Item owner: ${docSnapshot.data().userID}`
                ); // FIXME: user was previously observed as null here.
                alert(
                  'This item is not for sale. Is this your item? Please login to view it.'
                );
              }
            }
          } else {
            // New QR code: require authentication before starting the add-item workflow.
            console.log('DB miss!');

            if (!user) {
              alert('Please login to add an item.');
            } else {
              setQRCode(qrCode);
              setCurrentStep('choose-action');
            }
          }
        } catch (error) {
          console.error('Error searching for item in Firestore:', error);
        }
      };

      searchItemInFirestore();
    }
  }, [user]);


  // Run step-specific side effects only when entering a different step.
  // Run side effects only when entering a different workflow step.
  useEffect(() => {
    if (previousStepRef.current === currentStep) return;

    previousStepRef.current = currentStep;

    switch (currentStep) {
      case 'select-collection':
        dumpWorkingItem();
        break;

      case 'edit-description':
        setTitle(titlePreview);
        break;

      case 'set-price':
        setDescription(descriptionPreview);
        break;
    }
  }, [
    currentStep,
    dumpWorkingItem,
    setTitle,
    titlePreview,
    setDescription,
    descriptionPreview,
  ]);


  return (
    <div
      id="MyApp"
      className="absolute size-full mx-auto box-border min-h-screen bg-page pt-[7.5vh]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-[7.5vh] z-30 h-[15vh]"
        style={{
          background:
            'linear-gradient(to bottom, var(--page-background) 0%, transparent 100%)',
        }}
      />
      <div id="WorkflowContainer" className='flex items-center h-full flex-col relative justify-top align-top overflow-clip'>
        {/* Workflow elements are configured in StepConfiguration rather than
    hardcoded into the app shell. */}
        {stepComponents.map((Component, index) => (
          <React.Fragment key={index}>{Component}</React.Fragment>
        ))}

      </div>

      {/* The item detail page is shown separately from the workflow steps. */}
      {itemPageVisible && <ItemPageContainer />}

      <Nav />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-[25vh]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, var(--page-background) 100%)',
        }}
      />
    </div>

  );
};

export default MyApp;
