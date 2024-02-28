import Nav from './Nav';
import DropdownSelector from './DropDownSelector';
import QRScannerViewport from './QRScannerViewport';
import ActionTypeSelector from './ActionTypeSelector';
import ItemCard from './ItemCard';
import ItemPage from './ItemPage';
import CameraDrawer from './CameraDrawer';
import InputDrawer from './InputDrawer';
import PriceSlider from './PriceSlider';
import { useStepComponents, useStepRules } from '../StepConfiguration';
import React, { useEffect } from 'react';
import useAddSequenceStore from '../AddSequenceStore';

const App: React.FC = () => {
	const stepComponents = useStepComponents();
	const currentStep = useAddSequenceStore((state) => state.currentStep);
	const stepRules = useStepRules();
	const QRCode = useAddSequenceStore((state) => state.QRCode);
	const selectedCollection = useAddSequenceStore((state) => state.selectedCollection);
	const actionType = useAddSequenceStore((state) => state.actionType);
	const photos = useAddSequenceStore((state) => state.photos);
	const title = useAddSequenceStore((state) => state.title);
	const description = useAddSequenceStore((state) => state.description);
  
	useEffect(() => {
	  // Access and execute the rule function for the current step
	  const ruleForCurrentStep = stepRules[currentStep];
	  if (typeof ruleForCurrentStep === 'function') {
		ruleForCurrentStep();
	  }
	  console.log('Working Item Data:', {
		QRCode,
		selectedCollection,
		actionType,
		photos,
		title,
		description,
	  });
	}, [currentStep, stepRules]);

  return (
    <div className='mx-auto max-w-3xl bg-white'>
      <div className='h-[88vh] flex items-center flex-col justify-evenly overflow-scroll md:overflow-auto'>
        {stepComponents.map((Component, index) => (
          // Ensure each component has a unique key
          <React.Fragment key={index}>{Component}</React.Fragment>
        ))}
        {/* <ItemPage actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' /> */}
        {/* <ItemCard actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' key={1} /> */}
        {/* <DropdownSelector /> */}
        {/* <QRScannerViewport /> */}
        {/* <ActionTypeSelector /> */}
        {/* <CameraDrawer /> */}
        {/* <InputDrawer dataName='Description' rows={4}/> */}
        {/* <PriceSlider instructions='Select acceptable price minimum and maximum.' min={0} max={500} step={5} /> */}
      </div>
      <Nav />
    </div>
  );
};

export default App;
