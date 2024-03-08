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
// Import other components as needed

// Import the Zustand store
import useAddSequenceStore, { useAuthStore } from './ZustandStore';
import CardList from './components/CardList';

// Define a type or interface for the components mapping if needed
interface StepComponents {
  [key: number]: () => JSX.Element[]; // Function returns an array of JSX elements
}

// Define the mapping

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
  const photo2 = useAddSequenceStore((state) => state.photo2);
  const photo3 = useAddSequenceStore((state) => state.photo3);
  const descriptionPreview = useAddSequenceStore(
    (state) => state.descriptionPreview
  );
  const setDescription = useAddSequenceStore((state) => state.setDescription);
  const priceRange = useAddSequenceStore((state) => state.priceRange);

  // Define the rules for each step
  const stepRules: { [key: number]: () => void } = {
    0: () => {
      dumpWorkingItem();
      setCenterButtonIcon('tabler:plus');
      console.log('selectedCollection', selectedCollection);
      setSelectedCollection(selectedCollection);
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
      if (selectedCollection && QRCode !== '' && actionType && photo1) {
        setCenterButtonIcon('tabler:arrow-right');
        setIsCenterButtonEnabled(true);
      } else {
        setCenterButtonIcon('tabler:camera');
      }
    },
    4: () => {
      setIsCenterButtonEnabled(true);
      if (
        selectedCollection &&
        QRCode !== '' &&
        actionType &&
        photo1
        // photo2
      ) {
        setCenterButtonIcon('tabler:arrow-right');
        setIsCenterButtonEnabled(true);
      } else {
        setCenterButtonIcon('tabler:camera');
      }
    },
    // 5: () => {
    //   setIsCenterButtonEnabled(true);
    //   if (
    //     selectedCollection &&
    //     QRCode !== '' &&
    //     actionType &&
    //     photo1 &&
    //     photo2 &&
    //     photo3
    //   ) {
    //     setCenterButtonIcon('tabler:arrow-right');
    //     setIsCenterButtonEnabled(true);
    //   } else {
    //     setCenterButtonIcon('tabler:camera');
    //   }
    // },
    // 6: () => {
    //   if (
    //     selectedCollection &&
    //     QRCode !== '' &&
    //     actionType &&
    //     photo1 &&
    //     photo2 &&
    //     photo3 &&
    //     titlePreview !== ''
    //   ) {
    //     setIsCenterButtonEnabled(true);
    //   } else {
    //     setIsCenterButtonEnabled(false);
    //   }
    // },
    5: () => {
      setTitle(titlePreview);
      if (
        selectedCollection &&
        QRCode !== '' &&
        actionType &&
        photo1 &&
        // photo2 &&
        // photo3 &&
        title &&
        descriptionPreview !== ''
      ) {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    6: () => {
      setDescription(descriptionPreview);
      if (
        selectedCollection &&
        QRCode !== '' &&
        actionType &&
        photo1 &&
        // photo2 &&
        // photo3 &&
        title &&
        description
      ) {
        setIsCenterButtonEnabled(true);
      } else {
        setIsCenterButtonEnabled(false);
      }
    },
    7: () => {
      setCenterButtonIcon('ph:check-bold');
      if (
        selectedCollection &&
        QRCode !== '' &&
        actionType &&
        photo1 &&
        // photo2 &&
        // photo3 &&
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
    0: () =>
      user && user.uid === '45GunbHNtcZTq0X3GOpQEXXbIw43'
        ? [
            <DropDownSelector />,
            <CardList
              userId={user.uid}
            />,
          ]
        : [<Login />],
    1: () => [<QRScannerViewport />, <DropDownSelector />],
    2: () => [<ActionTypeSelector />],
    3: () => [
      <ItemCard
        id={QRCode}
        actionType={actionType}
        photos={[photo1]}
        priceRange={20}
        title={title}
      />,
      <CameraDrawer />,
    ],
    // 4: () => [
    //   <ItemPage
    //     actionType={actionType}
    //     imageSrc={photo1} // Keeping photo1 for the final display
    //     price={priceRange[1]} // Final price from priceRange[1]
    //     title={title}
    //     description={description}
    //   />,
    //   <CameraDrawer />,
    // ],
    // 5: () => [
    //   <ItemPage
    //     actionType={actionType}
    //     imageSrc={photo1} // Keeping photo1 for the final display
    //     price={priceRange[1]} // Final price from priceRange[1]
    //     title={title}
    //     description={description}
    //   />,
    //   <CameraDrawer />,
    // ],
    4: () => [
      <ItemPage
        actionType={actionType}
        photos={[photo1]} // Keeping photo1 for the final display
        priceRange={priceRange[1]} // Final price from priceRange[1]
        title={title}
        description={description}
        id={QRCode}
      />,
      <InputDrawerTitle rows={2} />,
    ],
    5: () => [
      <ItemPage
        actionType={actionType}
        photos={[photo1]} // Keeping photo1 for the final display
        priceRange={priceRange[1]} // Final price from priceRange[1]
        title={title}
        description={description}
        id={QRCode}
      />,
      <InputDrawerDescription rows={4} />,
    ],
    6: () => [
      <ItemPage
        actionType={actionType}
        photos={[photo1]} // Keeping photo1 for the final display
        priceRange={priceRange[1]} // Final price from priceRange[1]
        title={title}
        description={description}
        id={QRCode}
      />,
      <PriceSlider
        instructions='Select acceptable price minimum and maximum.'
        min={0}
        max={500}
        step={5}
      />,
    ],
    7: () => [
      <ItemPage
        actionType={actionType}
        photos={[photo1]} // Keeping photo1 for the final display
        priceRange={priceRange[1]} // Final price from priceRange[1]
        title={title}
        description={description}
        id={QRCode}
      />,
    ],
  };

  // Return the components for the current step, or an empty array if no match
  return stepComponents[currentStep] ? stepComponents[currentStep]() : [];
};
