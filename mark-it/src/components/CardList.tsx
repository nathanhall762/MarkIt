import React, { useEffect, useState } from 'react';
import { firebaseApp, db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ItemCard from './ItemCard';
import ListItem from './ListItem';
import useAddSequenceStore from '../ZustandStore';
import type { Item } from '../types/item.ts';
// Optionally, if `CardList` needs props like `userId` and `collectionId`, define an interface for them
interface CardListProps {
  userId: string;
}

const CardList: React.FC<CardListProps> = ({ userId }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [isListView, setIsListView] = useState(false);
  const selectedCollection = useAddSequenceStore(
    (state) => state.selectedCollection
  );
  const collectionId = selectedCollection;
  const fetchFlag = useAddSequenceStore((state) => state.fetchFlag);
  const setItemPageVisible = useAddSequenceStore(
    (state) => state.setItemPageVisible
  );
  const setItemID = useAddSequenceStore((state) => state.setItemID);
  const itemID = useAddSequenceStore((state) => state.itemID);

  const fetchItems = async () => {
    try {
      const q = query(
        collection(db, 'Items'),
        where('userID', '==', userId),
        where('itemDetails.collectionName', '==', collectionId)
      );
      const querySnapshot = await getDocs(q);
      const fetchedItems: Item[] = querySnapshot.docs.map((doc) => ({
        ...doc.data() as Item,
      }));
      console.log('fetchedItems', fetchedItems);
      setItems(fetchedItems);
    } catch (error) {
      console.error('Error fetching items:', error);
      // Handle the error here, e.g. show an error message to the user
    }
  };

  useEffect(() => {
    fetchItems();
  }, [userId, collectionId, fetchFlag]);


  return (
    <div id='CardList' className='flex flex-wrap w-full flex-row justify-center gap-4'>
      {items.map((item) =>
        isListView ? (
          <ListItem
            key={item.itemDetails.QRCode}
            {...item} // Spread item props
          />
        ) : (
          <ItemCard
            key={item.itemDetails.QRCode}
            {...item} // Spread item props
          />
          
        )
      )}
      <button
        onClick={() => setIsListView(!isListView)}
        className='absolute bottom-[13vh] right-2 p-4 border bg-surface-subtle text-white rounded-full shadow-lg'>
        {isListView ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 36 36'
            stroke='currentColor'>
            <rect
              x='5'
              y='5'
              width='12'
              height='12'
              fill='currentColor'
            />
            <rect
              x='21'
              y='5'
              width='12'
              height='12'
              fill='currentColor'
            />
            <rect
              x='5'
              y='21'
              width='12'
              height='12'
              fill='currentColor'
            />
            <rect
              x='21'
              y='21'
              width='12'
              height='12'
              fill='currentColor'
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CardList;
