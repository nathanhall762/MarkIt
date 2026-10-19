
import { Icon } from '@iconify/react';
import useAddSequenceStore, { useAuthStore } from '../ZustandStore';
import useWorkingItemSubmit from '../WorkingItemSubmit';
import { getNextStep } from '../WorkflowSteps';
import { canAdvanceWorkflow } from '../WorkflowValidation';

export default function RNavButton(): React.ReactElement | null {
    const currentStep = useAddSequenceStore((state) => state.currentStep);
    const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);
    const submitWorkingItem = useWorkingItemSubmit();


    const selectedCollection = useAddSequenceStore(
        (state) => state.selectedCollection
    );
    const QRCode = useAddSequenceStore((state) => state.QRCode);
    const actionType = useAddSequenceStore((state) => state.actionType);
    const photo1 = useAddSequenceStore((state) => state.photo1);
    const title = useAddSequenceStore((state) => state.title);
    const titlePreview = useAddSequenceStore((state) => state.titlePreview);
    const description = useAddSequenceStore((state) => state.description);
    const descriptionPreview = useAddSequenceStore(
        (state) => state.descriptionPreview
    );
    const priceRange = useAddSequenceStore((state) => state.priceRange);

    const user = useAuthStore((state) => state.user);

    const canAdvance = canAdvanceWorkflow({
        currentStep,
        userId: user?.uid,
        selectedCollection,
        QRCode,
        actionType,
        photo1,
        title,
        titlePreview,
        description,
        descriptionPreview,
        priceRange,
    });

    const handleClick = () => {
        if (!canAdvance) return;

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
            id="RNavButton"
            className={`border rounded-2xl ${canAdvance ? '' : 'cursor-not-allowed'}`}
            onClick={handleClick}
            disabled={!canAdvance}
        >
            <Icon
                icon={currentStep === 'review' ? 'ph:check-bold' : 'tabler:arrow-right'}
                height={76}
                width={112}
                color={canAdvance ? 'green' : 'gray'}
            />
        </button>
    );
}
