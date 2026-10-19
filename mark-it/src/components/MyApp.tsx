
import Nav from './Nav';
import { useStepComponents, useStepRules } from '../StepConfiguration';
import React, { useEffect } from 'react';
import useAddSequenceStore, { useAuthStore } from '../ZustandStore';
import { useLocation } from 'react-router-dom';
import { query, set } from 'firebase/database';
import ItemPageContainer from './ItemModal';
import { collection, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const MyApp: React.FC = () => {
  const stepComponents = useStepComponents();
  const currentStep = useAddSequenceStore((state) => state.currentStep);
  const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);
  const stepRules = useStepRules();
  const setQRCode = useAddSequenceStore((state) => state.setQRCode);
  const getQRCode = useAddSequenceStore((state) => state.QRCode);
  const getActionType = useAddSequenceStore((state) => state.actionType);
  const getUserCollections = useAddSequenceStore(
    (state) => state.initializeCollections
  );
  const selectedCollection = useAddSequenceStore(
    (state) => state.selectedCollection
  );
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
              setCurrentStep(2);
            }
          }
        } catch (error) {
          console.error('Error searching for item in Firestore:', error);
        }
      };

      searchItemInFirestore();
    }
  }, [user]);

  // Run the configured side effects for the active workflow step whenever it changes.
  useEffect(() => {
    const ruleForCurrentStep = stepRules[currentStep];

    if (typeof ruleForCurrentStep === 'function') {
      ruleForCurrentStep();
    }

    console.log('User:', user); // NOTE: user is giving correct object here.
    console.log('Current Step:', currentStep);
    console.log('Step Rules:', ruleForCurrentStep);
  }, [currentStep, stepRules]);

  return (
    <div className='mx-auto bg-primary-2 dark:bg-primary-9 relative top-[7.5vh] box-border'>
      <div className='mb-[12vh] pt-[4vh] pb-[16vh] min-h-[80.5vh] flex items-center flex-col justify-evenly overflow-clip'>
        {/* Workflow elements are configured in StepConfiguration rather than
    hardcoded into the app shell. */}
        {stepComponents.map((Component, index) => (
          <React.Fragment key={index}>{Component}</React.Fragment>
        ))}
      </div>

      {/* The item detail page is shown separately from the workflow steps. */}
      {itemPageVisible && <ItemPageContainer />}

      <Nav />
    </div>
  );
};

export default MyApp;
