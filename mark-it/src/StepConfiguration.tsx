import DropDownSelector from './components/DropDownSelector';
import ItemCard from './components/ItemCard';
import QRScannerViewport from './components/QRScannerViewport';
import ActionTypeSelector from './components/ActionTypeSelector';
import ItemPage from './components/ItemPage';
import InputDrawer from './components/InputDrawer';
import PriceSlider from './components/PriceSlider';
import Login from './components/Login';
import type { WorkflowStep } from './WorkflowSteps';
import useAddSequenceStore, { useAuthStore } from './ZustandStore';
import CardList from './components/CardList';
import CameraInput from './components/CameraInput';
import TextInput from './components/TextInput';

type StepComponents = Record<
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

  const stepComponents: StepComponents = {
    'select-collection': () =>
      user && user.uid // TODO: can hacker enter uid as state and bypass login?
        ? [<DropDownSelector />, <CardList userId={user.uid} />]
        : [<Login />],
    'scan-qr': () => [<QRScannerViewport />],
    'choose-action': () => [<DropDownSelector />, <ActionTypeSelector />],

    'take-photo': () => [
      <ItemCard
        actionType={actionType}
        itemDetails={{
          QRCode,
          collectionName: selectedCollection,
          createdAt: '',
          description,
          photos: [photo1],
          priceRange: { max: priceRange[1], min: priceRange[0] },
          title,
          updatedAt: '',
        }}
        userID={user?.uid ? user.uid : ''}
      />,
      <InputDrawer>
        <CameraInput />
      </InputDrawer>,
    ],

    'edit-title': () => [
      <ItemPage
        actionType={actionType}
        itemDetails={{
          QRCode,
          collectionName: selectedCollection,
          createdAt: '',
          description,
          photos: [photo1],
          priceRange: { max: priceRange[1], min: priceRange[0] },
          title,
          updatedAt: '',
        }}
        userID={user?.uid ? user.uid : ''}
      />,
      <InputDrawer>
        <TextInput field="title" rows={2} commitStep="review" />
      </InputDrawer>,
    ],

    'edit-description': () => [
      <ItemPage
        actionType={actionType}
        itemDetails={{
          QRCode,
          collectionName: selectedCollection,
          createdAt: '',
          description,
          photos: [photo1],
          priceRange: { max: priceRange[1], min: priceRange[0] },
          title,
          updatedAt: '',
        }}
        userID={user?.uid ? user.uid : ''}
      />,
      <InputDrawer>
        <TextInput field="description" rows={4} commitStep="set-price" />
      </InputDrawer>,
    ],

    'set-price': () => [
      <ItemPage
        actionType={actionType}
        itemDetails={{
          QRCode,
          collectionName: selectedCollection,
          createdAt: '',
          description,
          photos: [photo1],
          priceRange: { max: priceRange[1], min: priceRange[0] },
          title,
          updatedAt: '',
        }}
        userID={user?.uid ? user.uid : ''}
      />,
      <InputDrawer>
        <PriceSlider
          instructions="Select acceptable price minimum and maximum."
          min={0}
          max={500}
          step={5}
        />
      </InputDrawer>,
    ],

    'review': () => [
      <ItemPage
        actionType={actionType}
        itemDetails={{
          QRCode: QRCode,
          collectionName: selectedCollection,
          createdAt: '',
          description: description,
          photos: [photo1],
          priceRange: {
            max: priceRange[1],
            min: priceRange[0],
          },
          title: title,
          updatedAt: '',
        }}
        userID={user?.uid ? user.uid : ''}
      />,
    ],
  };

  // Return the components for the current step, or an empty array if no match
  return stepComponents[currentStep] ? stepComponents[currentStep]() : [];
};
