import { Icon } from '@iconify/react';
import useAddSequenceStore from '../ZustandStore';
import useWorkingItemSubmit from '../WorkingItemSubmit';

export default function NavButton(): React.ReactElement {
  const isCenterButtonEnabled = useAddSequenceStore(
    (state) => state.isCenterButtonEnabled
  );
  const icon = useAddSequenceStore((state) => state.centerButtonIcon);
  const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);
  const iconColor = isCenterButtonEnabled ? 'green' : 'gray';
  const photo1 = useAddSequenceStore((state) => state.photo1);
  const photo2 = useAddSequenceStore((state) => state.photo2);
  const photo3 = useAddSequenceStore((state) => state.photo3);
  const setPhoto1 = useAddSequenceStore((state) => state.setPhoto1);
  const setPhoto2 = useAddSequenceStore((state) => state.setPhoto2);
  const setPhoto3 = useAddSequenceStore((state) => state.setPhoto3);
  const submitWorkingItem = useWorkingItemSubmit();

  const handleClick = () => {
    if (
      (isCenterButtonEnabled && icon === 'tabler:arrow-right') ||
      icon === 'tabler:plus'
    ) {
      setCurrentStep((prevStep) => (prevStep === 9 ? 0 : prevStep + 1));
    }
    if (isCenterButtonEnabled && icon === 'tabler:camera') {
      if (!photo1) {
        setPhoto1('https://via.placeholder.com/150');
      } else if (!photo2) {
        setPhoto2('https://via.placeholder.com/150');
      } else if (!photo3) {
        setPhoto3('https://via.placeholder.com/150');
      }
    }
    if (isCenterButtonEnabled && icon === 'ph:check-bold') {
      submitWorkingItem();
      setCurrentStep(0);
    }
  };

  return (
    <button
      className={`border rounded-2xl ${
        isCenterButtonEnabled ? '' : 'cursor-not-allowed'
      }`}
      onClick={handleClick}
      disabled={!isCenterButtonEnabled}>
      {icon && (
        <Icon
          icon={icon}
          height={76}
          width={112}
          color={iconColor}
        />
      )}
    </button>
  );
}
