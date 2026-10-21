
import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import useAddSequenceStore, { useAuthStore } from '../ZustandStore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export default function CenterNavButton(): React.ReactElement | null {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const currentStep = useAddSequenceStore((state) => state.currentStep);
    const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);
    const setPhoto1 = useAddSequenceStore((state) => state.setPhoto1);
    const user = useAuthStore((state) => state.user);
    const QRCode = useAddSequenceStore((state) => state.QRCode);

    const handleCapture = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        try {
            const webmFile = new File([file], 'image.webm', {
                type: 'image/webm',
            });

            setPhoto1(URL.createObjectURL(webmFile));

            const fileRef = storageRef(storage, `${user?.uid}/${QRCode}`);
            const snapshot = await uploadBytes(fileRef, webmFile);
            const downloadURL = await getDownloadURL(snapshot.ref);

            setPhoto1(downloadURL);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const handleClick = () => {
        if (currentStep === 'select-collection') {
            // Existing add-item behavior: advance into the workflow.
            const nextStep = 'scan-qr';
            setCurrentStep(nextStep);
            return;
        }

        if (currentStep === 'take-photo') {
            fileInputRef.current?.click();
        }
    };

    if (currentStep !== 'select-collection' && currentStep !== 'take-photo') {
        return null;
    }

    const isAddingItem = currentStep === 'select-collection';

    return (
        <>
            <input
                id="CenterNavButtonFileInput"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleCapture}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />

            <button
                id="CenterNavButton"
                className="border rounded-2xl"
                onClick={handleClick}
            >
                <Icon
                    icon={isAddingItem ? 'tabler:plus' : 'tabler:camera'}
                    height={76}
                    width={112}
                    color="green"
                />
            </button>
        </>
    );
}
