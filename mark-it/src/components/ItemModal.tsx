import React from 'react';
import ItemPage from './ItemPage';
import { Icon } from '@iconify/react';
import useAddSequenceStore from '../ZustandStore';

const ItemPageContainer: React.FC = () => {
  const itemPageVisible = useAddSequenceStore((state) => state.itemPageVisible);
  const setItemPageVisible = useAddSequenceStore(
    (state) => state.setItemPageVisible
  );

  const handleClose = () => {
    setItemPageVisible(false);
  };
  return (
    <div className='fixed z-50 h-[80.5vh] w-screen top-[7.5vh] bg-ltbg2 dark:bg-dkbg1 flex items-center justify-center'>
      {/* Add your other app elements here */}
      <button
        onClick={handleClose}
        className='text-red-500 md:opacity-100 lg:opacity-50 border hover:opacity-100 hover:text-red-700 w-fit bg-ltbg1 dark:bg-dkbg1 p-2 rounded-full absolute right-0 m-2'>
        <Icon
          icon='bi:trash'
          height={24}
          width={24}
        />
      </button>
      <ItemPage
        id={''}
        title={''}
        photos={[]}
        priceRange={0}
        actionType={''}
      />
    </div>
  );
};

export default ItemPageContainer;
