
import type { ReactNode } from 'react';

interface InputDrawerProps {
  children: ReactNode;
}

const InputDrawer: React.FC<InputDrawerProps> = ({ children }) => {
  return (
    <div
      id="InputDrawer"
      className="absolute bottom-0 left-0 flex h-fit w-full flex-col rounded-t-3xl border-t border-border bg-brand-primary pb-[12vh] text-center"
    >
      {children}
    </div>
  );
};

export default InputDrawer;
