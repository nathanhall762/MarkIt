import { useEffect, useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import useAddSequenceStore, { getUserCollections, useAuthStore } from '../ZustandStore';
import type { Collection } from '../ZustandStore';

const DropdownSelector = () => {
  const user = useAuthStore((state) => state.user);
  const initializeCollections = useAddSequenceStore((state) => state.initializeCollections);
  const setSelectedCollection = useAddSequenceStore(
    (state) => state.setSelectedCollection
  );
  const selectedCollection = useAddSequenceStore(
    (state) => state.selectedCollection
  );
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user?.uid) {
      initializeCollections(user.uid);
    }
  }, [user, initializeCollections]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
  };

  return (
    <div className='relative mb-4' ref={dropdownRef}>
      <div 
        className='border rounded-full flex flex-row w-72 mx-auto p-2 justify-between text-center cursor-pointer'
        onClick={toggleDropdown}
      >
        <div className='flex overflow-clip'>
          <h3 className='px-2 overflow-clip'>{selectedCollection || 'Select a Collection'}</h3>
        </div>
        <div className='w-16 flex justify-center items-center border-l-2'>
          <Icon icon='bi:caret-down-fill' height={20} width={20} />
        </div>
      </div>
      {isDropdownVisible && collections.length > 0 && (
        <div className='absolute z-10 w-72 border mt-1 rounded-md'>
          {collections.map((collection) => (
            <div
              key={collection.ownerId}
              onClick={() => handleSelectCollection(collection.ownerId)}
              className='p-2 hover:bg-gray-100 cursor-pointer'
            >
              {collection.collectionName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelector;
