import DropDownSelector from './components/DropDownSelector';
import ItemCard from './components/ItemCard';
import QRScannerViewport from './components/QRScannerViewport';
import ActionTypeSelector from './components/ActionTypeSelector';
import CameraDrawer from './components/CameraDrawer';
import ItemPage from './components/ItemPage';
// Import other components as needed

// Import the Zustand store
import useAddSequenceStore from './AddSequenceStore';
import InputDrawer from './components/InputDrawer';
import PriceSlider from './components/PriceSlider';

// Define a type or interface for the components mapping if needed
interface StepComponents {
  [key: number]: () => JSX.Element[]; // Function returns an array of JSX elements
}

// Define the mapping
const stepComponents: StepComponents = {
  0: () => [<DropDownSelector />, <ItemCard actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' />],
  1: () => [<QRScannerViewport />, < DropDownSelector />],
  2: () => [<ActionTypeSelector />],
  3: () => [<ItemCard actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' />, <CameraDrawer />],
  4: () => [<ItemPage actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' />, <CameraDrawer />],
  5: () => [<ItemPage actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' />, <CameraDrawer />],
  6: () => [<ItemPage actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' />, <InputDrawer dataName='Title' rows={2}/>],
  7: () => [<ItemPage actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' />, <InputDrawer dataName='Description' rows={4}/>],
  8: () => [<ItemPage actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' />, <PriceSlider instructions='Select acceptable price minimum and maximum.' min={0} max={500} step={5} />],
  9: () => [<ItemPage actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' />],
};

// Function to define rules for the app at each step. The function will conditionally set isCenterButtonEnabled to true depending on conditions met in state. i.e conditions: selectedCollection not Null -> highlight Add
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
  const isCenterButtonEnabled = useAddSequenceStore(
    (state) => state.isCenterButtonEnabled
  );
  const QRCode = useAddSequenceStore((state) => state.QRCode);
  const setLeftButtonIcon = useAddSequenceStore((state) => state.setLeftButtonIcon);
  const dumpWorkingItem = useAddSequenceStore((state) => state.dumpWorkingItem);
  const actionType = useAddSequenceStore((state) => state.actionType);
  const setCenterButtonIcon = useAddSequenceStore((state) => state.setCenterButtonIcon);
  const photos = useAddSequenceStore((state) => state.photos);
  const setPhotos = useAddSequenceStore((state) => state.setPhotos);
  const title = useAddSequenceStore((state) => state.title);
  const setTitle = useAddSequenceStore((state) => state.setTitle);
  const description = useAddSequenceStore((state) => state.description);
  const titlePreview = useAddSequenceStore((state) => state.titlePreview);
  const setTitlePreview = useAddSequenceStore((state) => state.setTitlePreview);

  // Define the rules for each step
  const stepRules: { [key: number]: () => void } = {
    0: () => {
      dumpWorkingItem();
      setCenterButtonIcon('tabler:plus');
      setSelectedCollection('My Storage Unit');
      setIsCenterButtonEnabled(true);
      setLeftButtonIcon('material-symbols:search');
    },
    1: () => {
      setLeftButtonIcon('ep:back');
      setCenterButtonIcon('tabler:arrow-right');
      if (selectedCollection && QRCode !== '') {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    2: () => {
      if (selectedCollection && QRCode !== '' && actionType) {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    3: () => {
      setIsCenterButtonEnabled(true);
      if (selectedCollection && QRCode !== '' && actionType && photos.length > 0) {
        setCenterButtonIcon('tabler:arrow-right');
        setIsCenterButtonEnabled(true);
      } else {
        setCenterButtonIcon('tabler:camera');
      }
    },
    4: () => {
      setIsCenterButtonEnabled(true);
      if (selectedCollection && QRCode !== '' && actionType && photos.length > 1) {
        setCenterButtonIcon('tabler:arrow-right');
        setIsCenterButtonEnabled(true);
      } else {
        setCenterButtonIcon('tabler:camera');
      }
    },
    5: () => {
      setIsCenterButtonEnabled(true);
      if (selectedCollection && QRCode !== '' && actionType && photos.length > 2) {
        setCenterButtonIcon('tabler:arrow-right');
        setIsCenterButtonEnabled(true);
      } else {
        setCenterButtonIcon('tabler:camera');
      }
    },
    6: () => {
      if (selectedCollection && QRCode !== '' && actionType && photos.length > 2 && titlePreview !== '') {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    7: () => {
      setTitle(titlePreview);
      if (selectedCollection && QRCode !== '' && actionType && photos.length > 2 && title && description) {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    8: () => {
      if (selectedCollection && QRCode !== '' && actionType && photos.length > 2 && title && description) {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    9: () => {
      setCenterButtonIcon('ph:check-bold');
      if (selectedCollection && QRCode !== '' && actionType && photos.length > 2 && title && description) {
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

  // Return the components for the current step, or an empty array if no match
  return stepComponents[currentStep] ? stepComponents[currentStep]() : [];
};
