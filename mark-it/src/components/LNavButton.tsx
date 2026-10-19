import { Icon } from '@iconify/react';
import useAddSequenceStore from '../ZustandStore';
import { getPreviousStep } from '../WorkflowSteps';

export default function NavButton(): React.ReactElement {
  const icon = useAddSequenceStore((state) => state.leftButtonIcon);
  const currentStep = useAddSequenceStore((state) => state.currentStep);
  const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);

  const onClick = () => {
    if (icon !== 'ep:back') return;

    const previousStep = getPreviousStep(currentStep);

    if (previousStep) {
      setCurrentStep(previousStep);
    }
  };

  return (
    <button onClick={onClick}>
      {icon && <Icon icon={icon} height={46} width={52} />}
    </button>
  );
}