import useAddSequenceStore, { useAuthStore } from './ZustandStore';
import { firebaseApp } from './firebase';
import { getFirestore, collection, doc, setDoc, addDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

const useWorkingItemSubmit = () => {
  const user = useAuthStore((state) => state.user);
  const QRCode = useAddSequenceStore((state) => state.QRCode);
  const selectedCollection = useAddSequenceStore((state) => state.selectedCollection);
  const actionType = useAddSequenceStore((state) => state.actionType);
  const photo1 = useAddSequenceStore((state) => state.photo1);
  // Assuming you have photo2 and photo3 states similar to photo1
  const photo2 = useAddSequenceStore((state) => state.photo2);
  const photo3 = useAddSequenceStore((state) => state.photo3);
  const title = useAddSequenceStore((state) => state.title);
  const description = useAddSequenceStore((state) => state.description);
  const priceRange = useAddSequenceStore((state) => state.priceRange);
  const setCurrentStep = useAddSequenceStore(
    (state) => state.setCurrentStep
  );

  const submit = async () => {
    // Validate that user is not null
    if (!user) {
      console.error('User is not logged in');
      return;
    }

    // Construct the item object based on your schema
    const itemData = {
      userID: user.uid,
      actionType,
      itemDetails: {
        collectionName: selectedCollection,
        title,
        description,
        photos: [photo1, photo2, photo3].filter(Boolean),
        priceRange: {
          min: priceRange[0],
          max: priceRange[1]
        },
        QRCode,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };

    // Reference to the specific item document using the QR code as the document ID
    const itemDocRef = doc(db, 'Items', QRCode);

    // Set the document in the Items collection
    try {
      await setDoc(itemDocRef, itemData);
      console.log('Item submitted successfully');

      setCurrentStep('select-collection');
    } catch (error) {
      console.error('Error submitting item:', error);
    }
  };

  return submit;
};

export default useWorkingItemSubmit;
