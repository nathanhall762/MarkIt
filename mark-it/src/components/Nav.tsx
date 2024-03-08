import CenterNavButton from './CenterNavButton';
import LRNavButton from './LNavButton';
import { Icon } from '@iconify/react';

export default function Nav() {
  return (
    <div className='flex justify-evenly items-center border-t fixed bottom-0 z-10 bg-ltbg1 dark:bg-dkbg1 w-full h-[12vh]'>
      <LRNavButton />
      <CenterNavButton />
      <button>
        <Icon
          icon='charm:menu-hamburger'
          height={46}
          width={52}
          className='dark:text-black text-white'
        />
      </button>
    </div>
  );
}
