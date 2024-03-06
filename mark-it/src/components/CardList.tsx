import React, { useEffect, useState } from 'react';
import { firebaseApp } from '../firebase';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import ItemCard from './ItemCard';
import ListItem from './ListItem';

const db = getFirestore(firebaseApp);

export interface Item {
  id: string;
  title: string;
  description?: string;
  photos: string[]; // Assuming multiple photos can be stored in an array
  priceRange: { min: number; max: number } | number;
  actionType: string;
}

// Optionally, if `CardList` needs props like `userId` and `collectionId`, define an interface for them
interface CardListProps {
  userId: string;
  collectionId: string;
}

const CardList: React.FC<CardListProps> = ({ userId, collectionId }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [isListView, setIsListView] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const q = query(
        collection(db, `users/${userId}/Collections/${collectionId}/Items`)
      );
      const querySnapshot = await getDocs(q);
      const fetchedItems = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Item),
        id: doc.id,
      }));
      setItems(fetchedItems);
    };

    fetchItems();
  }, [userId, collectionId]);

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {items.map(item => isListView ? (
        <ListItem
          key={item.id}
          {...item} // Spread item props
        />
      ) : (
        <ItemCard
          key={item.id}
          {...item} // Spread item props
        />
      ))}
	  <button onClick={() => setIsListView(!isListView)}>Toggle View</button> 
    </div>
  );
};

export default CardList;
