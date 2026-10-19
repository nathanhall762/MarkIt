import DropDownSelector from './components/DropDownSelector';
import ItemCard from './components/ItemCard';
import QRScannerViewport from './components/QRScannerViewport';
import ActionTypeSelector from './components/ActionTypeSelector';
import CameraDrawer from './components/CameraDrawer';
import ItemPage from './components/ItemPage';
import {
  InputDrawerTitle,
  InputDrawerDescription,
} from './components/InputDrawer';
import PriceSlider from './components/PriceSlider';
import Login from './components/Login';
import type { WorkflowStep } from './WorkflowSteps';

// Import the Zustand store
import useAddSequenceStore, { useAuthStore } from './ZustandStore';
import CardList from './components/CardList';

type StepComponents = Record<
  WorkflowStep,
  () => JSX.Element[]
>;

// StepConfiguration coordinates the workflow through currentStep:
// useStepComponents() selects the UI, while useStepRules() updates
// navigation state and applies step-specific logic.
export const useStepRules = () => {
  const selectedCollection = useAddSequenceStore(
    (state) => state.selectedCollection
  );
  const setSelectedCollection = useAddSequenceStore(
    (state) => state.setSelectedCollection
  );
  const setIsCenterButtonEnabled = useAddSequenceStore(
    (state) => state.setIsCenterButtonEnabled
  );
  const QRCode = useAddSequenceStore((state) => state.QRCode);
  const setLeftButtonIcon = useAddSequenceStore(
    (state) => state.setLeftButtonIcon
  );
  const dumpWorkingItem = useAddSequenceStore((state) => state.dumpWorkingItem);
  const actionType = useAddSequenceStore((state) => state.actionType);
  const setCenterButtonIcon = useAddSequenceStore(
    (state) => state.setCenterButtonIcon
  );
  const title = useAddSequenceStore((state) => state.title);
  const setTitle = useAddSequenceStore((state) => state.setTitle);
  const description = useAddSequenceStore((state) => state.description);
  const titlePreview = useAddSequenceStore((state) => state.titlePreview);
  const photo1 = useAddSequenceStore((state) => state.photo1);
  const descriptionPreview = useAddSequenceStore(
    (state) => state.descriptionPreview
  );
  const setDescription = useAddSequenceStore((state) => state.setDescription);
  const priceRange = useAddSequenceStore((state) => state.priceRange);
  const user = useAuthStore((state) => state.user);

  // Define the rules for each step
  const stepRules: Record<WorkflowStep, () => void> = {
    'select-collection': () => {
      dumpWorkingItem();
      setCenterButtonIcon('tabler:plus');
      setSelectedCollection(selectedCollection);
      setLeftButtonIcon('material-symbols:search');
      setIsCenterButtonEnabled(false);
      if (user && user.uid) {
        setIsCenterButtonEnabled(true);
      }
    },
    'scan-qr': () => {
      setLeftButtonIcon('ep:back');
      setCenterButtonIcon('tabler:arrow-right');
      if (QRCode !== '') {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    'choose-action': () => {
      setLeftButtonIcon('ep:back');
      if (selectedCollection && QRCode !== '' && actionType) {
        setIsCenterButtonEnabled(true);
        const cleanUrl = window.location.pathname;
        history.replaceState(null, '', cleanUrl);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    'take-photo': () => {
      setIsCenterButtonEnabled(true);
      if (selectedCollection && QRCode !== '' && actionType && photo1) {
        setCenterButtonIcon('tabler:arrow-right');
        setIsCenterButtonEnabled(true);
      } else {
        setCenterButtonIcon('tabler:camera');
      }
    },
    'edit-title': () => {
      setIsCenterButtonEnabled(true);
      if (
        selectedCollection &&
        QRCode !== '' &&
        actionType &&
        photo1
      ) {
        setCenterButtonIcon('tabler:arrow-right');
        setIsCenterButtonEnabled(true);
      } else {
        setCenterButtonIcon('tabler:camera');
      }
    },
    'edit-description': () => {
      setTitle(titlePreview);
      if (
        selectedCollection &&
        QRCode !== '' &&
        actionType &&
        photo1 &&
        title &&
        descriptionPreview !== ''
      ) {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    'set-price': () => {
      setDescription(descriptionPreview);
      if (
        selectedCollection &&
        QRCode !== '' &&
        actionType &&
        photo1 &&
        title &&
        description
      ) {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    'review': () => {
      setCenterButtonIcon('ph:check-bold');
      if (
        selectedCollection &&
        QRCode !== '' &&
        actionType &&
        photo1 &&
        title &&
        description &&
        priceRange.length > 0
      ) {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
  };

  // Return the rules for the current step
  return stepRules;
};

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
        userID={user?.uid ? user.uid : '' }
      />,
      <CameraDrawer />,
    ],
    'edit-title': () => [
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
      userID={user?.uid ? user.uid : '' }
      />,
      <InputDrawerTitle rows={2} />,
    ],
    'edit-description': () => [
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
      userID={user?.uid ? user.uid : '' }
      />,
      <InputDrawerDescription rows={4} />,
    ],
    'set-price': () => [
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
      userID={user?.uid ? user.uid : '' }
      />,
      <PriceSlider
        instructions='Select acceptable price minimum and maximum.'
        min={0}
        max={500}
        step={5}
      />,
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
      userID={user?.uid ? user.uid : '' }
      />,
    ],
  };

  // Return the components for the current step, or an empty array if no match
  return stepComponents[currentStep] ? stepComponents[currentStep]() : [];
};
