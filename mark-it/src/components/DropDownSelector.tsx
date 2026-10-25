import { useEffect, useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import useAddSequenceStore, {
  getUserCollections,
  useAuthStore,
} from '../ZustandStore';
import type { Collection } from '../ZustandStore';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { ref } from 'firebase/storage';

const DropdownSelector = () => {
  const user = useAuthStore((state) => state.user);
  const initializeCollections = useAddSequenceStore(
    (state) => state.initializeCollections
  );
  const setSelectedCollection = useAddSequenceStore(
    (state) => state.setSelectedCollection
  );
  const selectedCollection = useAddSequenceStore(
    (state) => state.selectedCollection
  );
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // async function to refresh collections list
  const refreshCollections = async () => {
    if (user?.uid) {
      const fetchedCollections = await getUserCollections(user.uid);
      setCollections(fetchedCollections);
    }
  };

  useEffect(() => {
    if (user?.uid) {
      initializeCollections(user.uid);
    }
    refreshCollections();
  }, [user, initializeCollections]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleSelectCollection = (collectionId: string) => {
    setSelectedCollection(collectionId);
    setIsDropdownVisible(false);
    // TODO: update user document with selected collection as the defaultCollection
  };

  // Function to handle adding a new collection

  // Inside DropdownSelector component
  const handleAddCollection = async () => {
    // Placeholder: Replace this with actual logic to get new collection name
    // For example, this could come from a modal where the user inputs the name
    const newCollectionName = prompt('Enter new collection name:');
    if (newCollectionName && user) {
      try {
        // Add a new document with a generated ID to the user's collections
        await addDoc(collection(db, `users/${user.uid}/Collections`), {
          collectionName: newCollectionName,
          description: '', // Add logic to get description if necessary
          ownerID: user.uid,
          // Add any other fields you require
        });
        alert('New collection added successfully.');

        // Optionally, refresh the collections list
        if (user?.uid) {
          const fetchedCollections = await getUserCollections(user.uid);
          setCollections(fetchedCollections);
        }
      } catch (error) {
        console.error('Error adding collection:', error);
        alert('Failed to add new collection.');
      }
    }
  };

  return (
    <div
      id="DropDownSelector"
      className="absolute top-8 left-0 right-0 z-50"
      ref={dropdownRef}
    >
      <div
        className='bg-surface-subtle border rounded-full flex flex-row w-72 mx-auto p-2 justify-between text-center cursor-pointer'
        onClick={toggleDropdown}>
        <div className='flex overflow-clip'>
          <h3 className='px-2 overflow-clip'>
            {selectedCollection || 'Select a Collection'}
          </h3>
        </div>
        <div className='w-16 flex justify-center items-center border-l-2'>
          <Icon
            icon='bi:caret-down-fill'
            height={20}
            width={20}
          />
        </div>
      </div>
      {isDropdownVisible && (
        <div className='absolute z-10 w-72 border mt-1 rounded-md bg-surface-subtle'>
          {collections.map((collection) => (
            <div
              key={collection.id} // Use collection.id instead of collection.ownerId
              onClick={() => handleSelectCollection(collection.id)}
              className='p-2 text-black dark:text-white cursor-pointer dark:hover:bg-dkbg2'>
              {collection.collectionName} - <span className='opacity-50'>{selectedCollection}</span>
            </div>
          ))}

          <div
            onClick={handleAddCollection}
            className='p-2 text-black dark:text-white cursor-pointer border-t dark:hover:bg-dkbg2'>
            Add Collection
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSelector;
