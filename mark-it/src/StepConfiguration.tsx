import DropDownSelector from './components/DropDownSelector';
import ItemCard from './components/ItemCard';
import QRScannerViewport from './components/QRScannerViewport';
import ActionTypeSelector from './components/ActionTypeSelector';
import InputDrawer from './components/InputDrawer';
import PriceSlider from './components/PriceSlider';
import Login from './components/Login';
import type { WorkflowStep } from './WorkflowSteps';
import useAddSequenceStore, { useAuthStore } from './ZustandStore';
import CardList from './components/CardList';
import CameraInput from './components/CameraInput';
import TextInput from './components/TextInput';
import type { ItemDetails } from './types/item';

type AddItemWizardSteps = Record<
  WorkflowStep,
  () => JSX.Element[]
>;

// Function to get components based on the current step
export const useStepComponents = () => {
  const currentStep = useAddSequenceStore((state) => state.currentStep);
  const actionType = useAddSequenceStore((state) => state.actionType);
  const photo1 = useAddSequenceStore((state) => state.photo1);
  const title = useAddSequenceStore((state) => state.title);
  const description = useAddSequenceStore((state) => state.description);
  const priceRange = useAddSequenceStore((state) => state.priceRange);
  const user = useAuthStore((state) => state.user);
  const QRCode = useAddSequenceStore((state) => state.QRCode);
  const selectedCollection = useAddSequenceStore(
    (state) => state.selectedCollection
  );
  const itemDetails: ItemDetails = {
    QRCode,
    collectionName: selectedCollection,
    createdAt: '',
    description,
    photos: [photo1],
    priceRange: { max: priceRange[1], min: priceRange[0] },
    title,
    updatedAt: '',
  };

  const userID = user?.uid ?? '';

  const renderItemPreview = () => (
    <ItemCard
      actionType={actionType}
      itemDetails={itemDetails}
      userID={userID}
    />
  );

  const renderWizardInputStep = (input: JSX.Element) => [
    renderItemPreview(),
    <InputDrawer>{input}</InputDrawer>,
  ];

  const addItemWizardSteps: AddItemWizardSteps = {
    'select-collection': () =>
      user && user.uid // TODO: can hacker enter uid as state and bypass login?
        ? [<DropDownSelector />, <CardList userId={user.uid} />]
        : [<Login />],
    'scan-qr': () => [<QRScannerViewport />],
    'choose-action': () => [<DropDownSelector />, <ActionTypeSelector />],

    'take-photo': () => renderWizardInputStep(<CameraInput />),

    'edit-title': () =>
      renderWizardInputStep(
        <TextInput field="title" rows={2} commitStep="review" />
      ),

    'edit-description': () =>
      renderWizardInputStep(
        <TextInput field="description" rows={4} commitStep="set-price" />
      ),

    'set-price': () =>
      renderWizardInputStep(
        <PriceSlider
          instructions="Select acceptable price minimum and maximum."
          min={0}
          max={500}
          step={5}
        />
      ),

    'review': () => [renderItemPreview()],
  };

  // Return the components for the current step, or an empty array if no match
  return addItemWizardSteps[currentStep] ? addItemWizardSteps[currentStep]() : [];
};
