import create from 'zustand';

interface AddSequenceState {
	currentStep: number;
	isCenterButtonEnabled: boolean;
	centerButtonIcon: string;
	leftButtonIcon: string;
	setIsCenterButtonEnabled: (isCenterButtonEnabled: boolean) => void;
	setCenterButtonIcon: (centerButtonIcon: string) => void;
	setLeftButtonIcon: (leftButtonIcon: string) => void;
  }

const useAddSequenceStore = create<AddSequenceState>((set) => ({
	currentStep: 0,
	isCenterButtonEnabled: false,
	leftButtonIcon: 'ep:back',
	centerButtonIcon: 'tabler:plus',

	setIsCenterButtonEnabled: (isCenterButtonEnabled: boolean) => set({ isCenterButtonEnabled }),
	setCenterButtonIcon: (centerButtonIcon: string) => set({ centerButtonIcon }),
	setLeftButtonIcon: (leftButtonIcon: string) => set({ leftButtonIcon }),
}));

export default useAddSequenceStore;