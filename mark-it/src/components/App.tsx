import Nav from './Nav';
import { useStepComponents, useStepRules } from '../StepConfiguration';
import React, { useEffect } from 'react';
import useAddSequenceStore from '../ZustandStore';
import { useLocation } from 'react-router-dom';
import { set } from 'firebase/database';
import ItemPageContainer from './ItemModal';

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

  useEffect(() => {
    // Directly use window.location.search to get query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const actionTypeParam = queryParams.get('actionType');
    const qrCode = queryParams.get('qrCode');
    if (qrCode) {
      if (actionTypeParam) {
        if (actionTypeParam === 'store') {
          setItemPageVisible(true);
        }
      } else {
        setQRCode(qrCode);
        setCurrentStep(2);
        console.log('qrCode', qrCode);
        console.log('getQRCode', getQRCode);
        console.log('getActionType', getActionType);
        
      }
    }
  }, [setQRCode, setCurrentStep, getQRCode, getActionType]);

  useEffect(() => {
    const ruleForCurrentStep = stepRules[currentStep];
    if (typeof ruleForCurrentStep === 'function') {
      ruleForCurrentStep();
    }
    console.log('selectedCollection', selectedCollection);
    console.log('getQRCode', getQRCode);
    console.log('getActionType', getActionType);
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
