// DeleteButton.tsx
import React from 'react';
import { db } from '../firebase'; // Import your Firebase config
import { doc, deleteDoc } from 'firebase/firestore';
import { Icon } from '@iconify/react';
import useAddSequenceStore from '../ZustandStore';

interface DeleteButtonProps {
  itemId: string; // ID of the item to delete
  collectionId: string; // ID of the collection containing the item
  userId: string; // ID of the user owning the collection
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ itemId, collectionId, userId }) => {
const setSelectedCollection = useAddSequenceStore((state) => state.setSelectedCollection);
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, `users/${userId}/Collections/${collectionId}/Items`, itemId));
	  useAddSequenceStore.getState().toggleFetchFlag();
      alert("Item deleted successfully.");
	  
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item.");
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500 md:opacity-100 lg:opacity-50 border hover:opacity-100 hover:text-red-700 w-fit bg-ltbg1 dark:bg-dkbg1 p-2 rounded-full absolute right-0 m-2">
      <Icon icon="bi:trash" height={24} width={24} />
    </button>
  );
};

export default DeleteButton;
