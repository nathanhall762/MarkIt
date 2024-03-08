import useAddSequenceStore, { useAuthStore  } from './ZustandStore';
import { firebaseApp } from './firebase';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

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

  const submit = async () => {
    // Validate that user is not null
    if (!user) {
      console.error('User is not logged in');
      return;
    }

    // Construct the item object based on your schema
    const itemData = {
      QRCode,
      actionType,
      title,
      description,
      photos: [photo1, photo2, photo3].filter(Boolean), // Filter out empty strings
      priceRange: {
        min: priceRange[0], // Assuming priceRange is an array [min, max]
        max: priceRange[1]
      },
      createdAt: new Date(), // Firestore will convert this to a Timestamp
      updatedAt: new Date(), // Firestore will convert this to a Timestamp
    };

    // Reference to the user's collection document
    const collectionRef = doc(db, `users/${user.uid}/Collections/${selectedCollection}/Items`, QRCode);
    
    // Set the document in Firestore
    try {
      await setDoc(collectionRef, itemData);
      console.log('Item submitted successfully');
    } catch (error) {
      console.error('Error submitting item:', error);
    }
  };

  return submit;
};

export default useWorkingItemSubmit;
