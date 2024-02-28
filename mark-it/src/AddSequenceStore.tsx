import { create } from 'zustand';

interface AddSequenceState {
  currentStep: number;
  setCurrentStep: (arg: number | ((prevStep: number) => number)) => void;
  isCenterButtonEnabled: boolean;
  setIsCenterButtonEnabled: (isCenterButtonEnabled: boolean) => void;
  centerButtonIcon: string;
  setCenterButtonIcon: (centerButtonIcon: string) => void;
  leftButtonIcon: string;
  setLeftButtonIcon: (leftButtonIcon: string) => void;
  titlePreview: string;
  setTitlePreview: (titlePreview: string) => void;
  descriptionPreview: string;
  setDescriptionPreview: (descriptionPreview: string) => void;
  

  // State for the working item
  selectedCollection: string;
  setSelectedCollection: (selectedCollection: string) => void;
  QRCode: string;
  setQRCode: (QRCode: string) => void;
  dumpWorkingItem: () => void;
  actionType: string;
  setActionType: (actionType: string) => void;
  photos: string[];
  setPhotos: (photos: string[]) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
}

const useAddSequenceStore = create<AddSequenceState>((set) => ({
  currentStep: 0,
  setCurrentStep: (arg) =>
    set((state) => ({
      currentStep: typeof arg === 'function' ? arg(state.currentStep) : arg,
    })),
  isCenterButtonEnabled: true,
  setIsCenterButtonEnabled: (isCenterButtonEnabled: boolean) =>
    set({ isCenterButtonEnabled }),
  leftButtonIcon: 'ep:back',
  setCenterButtonIcon: (centerButtonIcon: string) => set({ centerButtonIcon }),
  centerButtonIcon: 'tabler:plus',
  setLeftButtonIcon: (leftButtonIcon: string) => set({ leftButtonIcon }),
  titlePreview: '',
  setTitlePreview: (titlePreview: string) => set({ titlePreview }),
  descriptionPreview: '',
  setDescriptionPreview: (descriptionPreview: string) => set({ descriptionPreview }),
  

  // State for the working item
  selectedCollection: 'My Storage Unit',
  setSelectedCollection: (selectedCollection: string) =>
    set({ selectedCollection }),
  QRCode: '',
  setQRCode: (QRCode: string) => set({ QRCode }),
  dumpWorkingItem: () => {
    set({
      selectedCollection: 'My Storage Unit',
      QRCode: '',
	  actionType: '',
	  title: '',
	  description: '',
    });
  },
  actionType: '',
  setActionType: (actionType: string) => set({ actionType }),
  photos: [],
  setPhotos: (photos: string[]) => set({ photos }),
  title: '',
  setTitle: (title: string) => set({ title }),
  description: '',
  setDescription: (description: string) => set({ description }),
}));

export default useAddSequenceStore;
