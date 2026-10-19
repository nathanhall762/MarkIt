
import { Icon } from '@iconify/react';
import useAddSequenceStore from '../ZustandStore';
import { getPreviousStep } from '../WorkflowSteps';

export default function LNavButton(): React.ReactElement {
    const currentStep = useAddSequenceStore((state) => state.currentStep);
    const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);

    const previousStep = getPreviousStep(currentStep);

    const handleClick = () => {
        if (previousStep) {
            setCurrentStep(previousStep);
        }
    };

    if (!previousStep) return <></>;

    return (
        <button
            id="LNavButton"
            className='border rounded-2xl'
            onClick={handleClick}
        >
            <Icon
                icon="tabler:arrow-left"
                height={76}
                width={112}
            />
        </button>
    );
}
