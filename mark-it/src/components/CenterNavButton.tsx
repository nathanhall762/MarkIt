import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import useAddSequenceStore, { useAuthStore } from '../ZustandStore';
import useWorkingItemSubmit from '../WorkingItemSubmit';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';
import { getNextStep } from '../WorkflowSteps';


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
  const user = useAuthStore((state) => state.user);
  const QRCode = useAddSequenceStore((state) => state.QRCode);

  const handleCapture = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here, upload the file to firebase storage and setPhoto1 to the URL
      try {
        // Conver image file to webm format
        const webmFile = new File([file], 'image.webm', { type: 'image/webm' });
        setPhoto1(URL.createObjectURL(webmFile));
        console.log('webmFile', webmFile);
        // Create a storage reference
        const fileRef = storageRef(storage, `${user?.uid}/${QRCode}`);

        // Upload the file
        const snapshot = await uploadBytes(fileRef, webmFile);

        // After upload completes, get the download URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        console.log("File available at", downloadURL);
        // Now you can use downloadURL for displaying the image or storing it in Firestore
        setPhoto1(downloadURL);
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle the error appropriately in your app
        // For example, you could show a user-friendly error message
      }
    }
  };

  const currentStep = useAddSequenceStore((state) => state.currentStep);

  const handleClick = () => {
    if (!isCenterButtonEnabled) return;

    if (icon === 'tabler:camera') {
      fileInputRef.current?.click();
      return;
    }

    if (icon === 'tabler:arrow-right' || icon === 'tabler:plus') {
      const nextStep = getNextStep(currentStep);

      if (nextStep) {
        setCurrentStep(nextStep);
      }

      return;
    }

    if (icon === 'ph:check-bold') {
      submitWorkingItem();
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
        className={`border rounded-2xl ${isCenterButtonEnabled ? '' : 'cursor-not-allowed'
          }`}
        onClick={handleClick}
        disabled={!isCenterButtonEnabled}
      >
        {icon && <Icon icon={icon} height={76} width={112} color={iconColor} />}
      </button>
    </>
  );
}

