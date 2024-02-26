import { Icon } from '@iconify/react';

const DropdownSelector = () => {
  return (
    <div className='border border-black rounded-full flex flex-row w-72 mx-auto p-2 justify-between text-center'>
      <div className='w-full'>
        <h3>My Storage Unit</h3>
      </div>
      <div className='w-16 flex justify-center items-center border-l-2 border-gray-300'>
        <Icon
          icon='bi:caret-down-fill'
          height={20}
          width={20}
        />
      </div>
    </div>
  );
};

export default DropdownSelector;
