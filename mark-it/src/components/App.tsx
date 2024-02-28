import Nav from './Nav';
import DropdownSelector from './DropDownSelector';
import QRScannerViewport from './QRScannerViewport';
import ActionTypeSelector from './ActionTypeSelector';
import ItemCard from './ItemCard';
import ItemPage from './ItemPage';
import CameraDrawer from './CameraDrawer';
import InputDrawer from './InputDrawer';
import PriceSlider from './PriceSlider';
import { useStepComponents } from '../StepConfiguration';
import React from 'react';

const App: React.FC = () => {
	  const stepComponents = useStepComponents();
  return (
    <div className='mx-auto max-w-3xl bg-white'>
      <div className='h-[88vh] flex items-center flex-col justify-evenly overflow-scroll md:overflow-auto'>
	  {stepComponents.map((Component, index) => (
          // Ensure each component has a unique key
          <React.Fragment key={index}>
            {Component}
          </React.Fragment>
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
