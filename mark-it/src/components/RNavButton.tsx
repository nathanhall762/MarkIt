import { Icon } from '@iconify/react';
import useAddSequenceStore from '../ZustandStore';
import useWorkingItemSubmit from '../WorkingItemSubmit';
import { getNextStep } from '../WorkflowSteps';


export default function RNavButton(): React.ReactElement | null {

    const isCenterButtonEnabled = useAddSequenceStore(
        (state) => state.isCenterButtonEnabled
    );
    const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);
    const submitWorkingItem = useWorkingItemSubmit();

    const currentStep = useAddSequenceStore((state) => state.currentStep);

    const handleClick = () => {
        if (!isCenterButtonEnabled) return;

        if (currentStep === 'review') {
            submitWorkingItem();
            return;
        }

        const nextStep = getNextStep(currentStep);

        if (nextStep) {
            setCurrentStep(nextStep);
        }
    };

    if (currentStep === 'select-collection') {
        return null;
    }

    return (
        <button
            id='RNavButton'
            className={`border rounded-2xl ${isCenterButtonEnabled ? '' : 'cursor-not-allowed'
                }`}
            onClick={handleClick}
            disabled={!isCenterButtonEnabled}
        >
            <Icon
                icon={currentStep === 'review' ? 'ph:check-bold' : 'tabler:arrow-right'}
                height={76}
                width={112}
                color={isCenterButtonEnabled ? 'green' : 'gray'}
            />
        </button>
    );
}

