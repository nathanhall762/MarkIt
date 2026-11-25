import React, { useEffect, useState } from 'react';
import ItemPage from './ItemPage.tsx';
import { Icon } from '@iconify/react';
import useAddSequenceStore from '../ZustandStore.tsx';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.ts';
import type { Item } from '../types/item.ts';

const ItemPageContainer: React.FC = () => {
  const [itemDetails, setItemDetails] = useState<Item | null>(null);
  const itemPageVisible = useAddSequenceStore((state) => state.itemPageVisible);
  const setItemPageVisible = useAddSequenceStore(
    (state) => state.setItemPageVisible
  );
  const itemID = useAddSequenceStore((state) => state.itemID);
  const setItemID = useAddSequenceStore((state) => state.setItemID);

  const handleClose = () => {
    setItemID('');
    setItemPageVisible(false);
    // remove query params
    const url = new URL(window.location.href);
    url.searchParams.delete('qrCode');
    window.history.pushState({}, '', url.toString());
    

  };

  useEffect(() => {
    // Define an async function to fetch item details
    const fetchItemDetails = async () => {
      if (!itemID) {
        console.log('Item ID not set'); // FIXME: this is always triggering
        return;
      }  // Early return if itemID is not set

      const docRef = doc(db, 'Items', itemID); // Adjust path as needed
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItemDetails(docSnap.data() as Item);
          console.log('Document data:', docSnap.data());
        } else {
          console.log('No such document!');
          // Handle case where document doesn't exist
        }
      } catch (error) {
        console.error('Error fetching document:', error);
        // Handle any errors that occur during fetch
      }
    };

    fetchItemDetails();
  }, [itemID]); // Re-fetch when itemID changes
  return (
    <div className='absolute z-50 h-[80.5vh] w-full top-[7.5vh] bg-surface-subtle flex items-center justify-center'>
      {/* Add your other app elements here */}
      <button
        onClick={handleClose}
        className='text-red-500 md:opacity-100 lg:opacity-50 border hover:opacity-100 hover:text-red-700 w-fit bg-surface-subtle p-2 rounded-full absolute left-0 bottom-1 m-2 z-50'>
        <Icon
          icon='tabler:arrow-left'
          height={24}
          width={24}
        />
      </button>
      {itemDetails && (
        <ItemPage
          {...itemDetails}
        />
      )}
    </div>
  );
};

export default ItemPageContainer;
