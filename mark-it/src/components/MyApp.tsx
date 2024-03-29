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

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const qrCode = queryParams.get('qrCode');

    if (qrCode) {
      const searchItemInFirestore = async () => {
        try {
          const itemDocRef = doc(db, 'Items', qrCode);
          const docSnapshot = await getDoc(itemDocRef);

          if (docSnapshot.exists()) {
            console.log(docSnapshot.data().userID);
            // DB hit: QR code found in Firestore
            console.log('DB hit!');
            // Perform actions for DB hit
            // if item has actionType of 'sell' or 'rent', show item page
            const actionType = docSnapshot.data().actionType;
            if (actionType === 'sell' || actionType === 'rent') {
              console.log('Item is for sale or rent');
              setItemID(qrCode);
              setItemPageVisible(true);
              // if item has actionType of 'store'
            } else if (actionType === 'store') {
              // if user is not logged in, show login page
              // if user is logged in and item's ownerid matches userid, show item page
              if (user && user.uid === docSnapshot.data().userID) {
                console.log('User is logged in and item owner matches userid');
                setItemID(qrCode);
                setItemPageVisible(true);
              } else {
                // if user is logged in and item's ownerid does not match userid and item's actionType is 'store', show 'this item is not for sale' page
                console.log(
                  `User: ${user}, Item owner: ${docSnapshot.data().userID}`
                ); // FIXME: user is always null???
                alert('This item is not for sale. Is this your item? Please login to view it.');
              }

              // if user is logged in and item's ownerid does not match userid and item's actionType is 'store', show 'this item is not for sale' page
            }
          } else {
            // DB miss: QR code not found in Firestore
            console.log('DB miss!');
            // Perform actions for DB miss
            // if user is not logged in, show alert to login
            if (!user) {
              alert('Please login to add an item.');
            } else {
            // if user is logged in, set QR code in Zustand store and set current step to 2
            setQRCode(qrCode);
            setCurrentStep(2);
          }}
        } catch (error) {
          console.error('Error searching for item in Firestore:', error);
        }
      };

      searchItemInFirestore();
    }
  }, [user]);

  useEffect(() => {
    const ruleForCurrentStep = stepRules[currentStep];
    if (typeof ruleForCurrentStep === 'function') {
      ruleForCurrentStep();
    }
    console.log('User:', user); // NOTE: user is giving correct object here
  }, [currentStep, stepRules]);

  return (
    <div className='mx-auto bg-ltbg1 dark:bg-dkbg2 relative top-[7.5vh] box-border'>
      <div className='mb-[12vh] pt-[4vh] pb-[16vh] min-h-[80.5vh] flex items-center flex-col justify-evenly overflow-scroll'>
        {stepComponents.map((Component, index) => (
          <React.Fragment key={index}>{Component}</React.Fragment>
        ))}
      </div>
      {itemPageVisible && <ItemPageContainer />}
      <Nav />
    </div>
  );
};

export default MyApp;
