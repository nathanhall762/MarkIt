import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import useAddSequenceStore from '../ZustandStore';
import useWorkingItemSubmit from '../WorkingItemSubmit';

export default function NavButton(): React.ReactElement {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isCenterButtonEnabled = useAddSequenceStore(
    (state) => state.isCenterButtonEnabled
  );
  const icon = useAddSequenceStore((state) => state.centerButtonIcon);
  const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);
  const iconColor = isCenterButtonEnabled ? 'green' : 'gray';
  const submitWorkingItem = useWorkingItemSubmit();
  const setPhoto1 = useAddSequenceStore((state) => state.setPhoto1);

  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here, handle the file, e.g., by uploading it or converting it to a base64 string
      console.log('Captured file:', file);
      setPhoto1(URL.createObjectURL(file));

      
    }
  };

  const handleClick = () => {
    if (icon === 'tabler:camera' && isCenterButtonEnabled) {
      // Trigger file input click to open camera
      fileInputRef.current?.click();
      return;
    }
    // Your existing handleClick logic
    if (
      (isCenterButtonEnabled && icon === 'tabler:arrow-right') ||
      icon === 'tabler:plus'
    ) {
      setCurrentStep((prevStep) => (prevStep === 9 ? 0 : prevStep + 1));
    }
    if (isCenterButtonEnabled && icon === 'ph:check-bold') {
      submitWorkingItem();
      setCurrentStep(0);
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCapture}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <button
        className={`border rounded-2xl ${
          isCenterButtonEnabled ? '' : 'cursor-not-allowed'
        }`}
        onClick={handleClick}
        disabled={!isCenterButtonEnabled}
      >
        {icon && <Icon icon={icon} height={76} width={112} color={iconColor} />}
      </button>
    </>
  );
}

