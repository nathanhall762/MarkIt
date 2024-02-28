import { Icon } from '@iconify/react';
import useAddSequenceStore from '../AddSequenceStore';

export default function NavButton(): React.ReactElement {
  const isCenterButtonEnabled = useAddSequenceStore(
    (state) => state.isCenterButtonEnabled
  );
  const icon = useAddSequenceStore((state) => state.centerButtonIcon);
  const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);
  const iconColor = isCenterButtonEnabled ? 'green' : 'gray';
  const setPhotos = useAddSequenceStore((state) => state.setPhotos);
  const photos = useAddSequenceStore((state) => state.photos);

  const handleClick = () => {
    if (
      (isCenterButtonEnabled && icon === 'tabler:arrow-right') ||
      icon === 'tabler:plus'
    ) {
      setCurrentStep((prevStep) => (prevStep === 9 ? 0 : prevStep + 1));
    }
    if (isCenterButtonEnabled && icon === 'tabler:camera') {
      setPhotos([
        ...photos,
        'https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL',
      ]);
    }
    if (isCenterButtonEnabled && icon === 'ph:check-bold') {
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
