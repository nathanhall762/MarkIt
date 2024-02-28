import CenterNavButton from './CenterNavButton';
import LRNavButton from './LNavButton';
import { Icon } from '@iconify/react';

export default function Nav() {
  return (
    <div className='flex justify-evenly items-center border-t border-black relative w-full h-[12vh]'>
      <LRNavButton />
      <CenterNavButton />
      <button>
        <Icon
          icon='charm:menu-hamburger'
          height={46}
          width={52}
        />
      </button>
    </div>
  );
}
