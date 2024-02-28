import DropDownSelector from './components/DropDownSelector';
import ItemCard from './components/ItemCard';
import QRScannerViewport from './components/QRScannerViewport';
// Import other components as needed

// Import the Zustand store
import useAddSequenceStore from './AddSequenceStore';

// Define a type or interface for the components mapping if needed
interface StepComponents {
  [key: number]: () => JSX.Element[]; // Function returns an array of JSX elements
}

// Define the mapping
const stepComponents: StepComponents = {
  0: () => [<DropDownSelector key="dropdown" />, <ItemCard actionType='Rent' imageSrc='https://photos.google.com/photo/AF1QipPARII2syIJfaZl_6iK8I0-MjcZLdHmS2qQt_pL' price={20} title='Digital Optical Audio Toslink Sound Bar TV Cable' key={1} />],
  1: () => [<QRScannerViewport />, < DropDownSelector key="dropdown" />],
  // TODO: Add other steps here...
  // Example for another step:
  // 1: () => [<AnotherComponent key="anothercomponent" />],
};

// Function to get components based on the current step
export const useStepComponents = () => {
  const currentStep = useAddSequenceStore((state) => state.currentStep);

  // Return the components for the current step, or an empty array if no match
  return stepComponents[currentStep] ? stepComponents[currentStep]() : [];
};
