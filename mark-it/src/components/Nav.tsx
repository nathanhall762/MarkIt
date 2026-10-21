import LNavButton from './LNavButton';
import CenterNavButton from './CenterNavButton';
import RNavButton from './RNavButton';


export default function Nav(): React.ReactElement {
  return (
    <nav
      id="Nav"
      className="grid grid-cols-3 items-center border-t fixed bottom-0 z-10 bg-primary-3 dark:bg-primary-7 w-full h-[12vh]"
    >
      <div className="flex justify-center">
        <LNavButton />
      </div>

      <div className="flex justify-center">
        <CenterNavButton />
      </div>

      <div className="flex justify-center">
        <RNavButton />
      </div>
    </nav>
  );
}

