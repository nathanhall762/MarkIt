import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { db } from './firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import type { WorkflowStep } from './WorkflowSteps';

export interface Collection {
  id: string;
  ownerId: string;
  collectionName: string;
  description: string;
}

export interface User {
  uid: string;
  email: string | null;
  username: string | null;
}

// TODO: Does this get used anywhere?
// get user collections from firebase using user
export const getUserCollections = async (
  uid: string
): Promise<Collection[]> => {
  const q = query(collection(db, `users/${uid}/Collections`));
  const querySnapshot = await getDocs(q);
  const fetchedCollections = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Collection, 'id'>),
  }));
  return fetchedCollections;
};

const collections = getUserCollections('uid'); // TODO: Can this be deleted?

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null, // Default state
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage-local',
    }
  )
);

interface AddSequenceState {
  currentStep: WorkflowStep;
  setCurrentStep: (step: WorkflowStep) => void;
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
  fetchFlag: boolean;
  toggleFetchFlag: () => void;
  itemPageVisible: boolean;
  setItemPageVisible: (itemPageVisible: boolean) => void;
  itemID: string;
  setItemID: (itemID: string) => void;


  // State for the working item
  selectedCollection: string;
  setSelectedCollection: (selectedCollection: string) => void;
  initializeCollections: (uid: string) => void;
  QRCode: string;
  setQRCode: (QRCode: string) => void;
  dumpWorkingItem: () => void;
  actionType: string;
  setActionType: (actionType: string) => void;
  photo1: string;
  setPhoto1: (photo1: string) => void;
  photo2: string;
  setPhoto2: (photo2: string) => void;
  photo3: string;
  setPhoto3: (photo3: string) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  priceRange: number[];
  setPriceRange: (priceRange: number[]) => void;
}

const useAddSequenceStore = create<AddSequenceState>()(
  persist(
    (set, get) => ({
  currentStep: 'select-collection',
  setCurrentStep: (step) => set({ currentStep: step }),
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
  setDescriptionPreview: (descriptionPreview: string) =>
    set({ descriptionPreview }),
  fetchFlag: false,
  toggleFetchFlag: () => set((state) => ({ fetchFlag: !state.fetchFlag })),
  itemPageVisible: false,
  itemID: '',
  setItemID: (itemID: string) => set({ itemID }),
  setItemPageVisible: (itemPageVisible: boolean) =>
    set({ itemPageVisible }),

  // State for the working item
  selectedCollection: '',
  setSelectedCollection: (selectedCollection: string) =>
    set({ selectedCollection }),
  initializeCollections: async (uid: string) => {
    // This function should be called to initialize collections
    const fetchedCollections = await getUserCollections(uid);
    if (fetchedCollections.length > 0 && !get().selectedCollection) {
  set({ selectedCollection: fetchedCollections[0].id });
}
  },
  QRCode: '',
  setQRCode: (QRCode: string) => set({ QRCode }),
  dumpWorkingItem: () => {
    set({
      QRCode: '',
      actionType: '',
      title: '',
      description: '',
      photo1: '',
      photo2: '',
      photo3: '',
      titlePreview: '',
      descriptionPreview: '',
    });
  },
  actionType: '',
  setActionType: (actionType: string) => set({ actionType }),
  photo1: '',
  setPhoto1: (photo1: string) => set({ photo1 }),
  photo2: '',
  setPhoto2: (photo2: string) => set({ photo2 }),
  photo3: '',
  setPhoto3: (photo3: string) => set({ photo3 }),
  title: '',
  setTitle: (title: string) => set({ title }),
  description: '',
  setDescription: (description: string) => set({ description }),
  priceRange: [0, 500],
  setPriceRange: (priceRange: number[]) => set({ priceRange }),
}),
    {
      name: 'markit-workflow-storage',
      partialize: (state) => ({
        currentStep: state.currentStep,
        selectedCollection: state.selectedCollection,
        QRCode: state.QRCode,
        actionType: state.actionType,
        photo1: state.photo1,
        photo2: state.photo2,
        photo3: state.photo3,
        title: state.title,
        description: state.description,
        titlePreview: state.titlePreview,
        descriptionPreview: state.descriptionPreview,
        priceRange: state.priceRange,
      }),
    }
  )
);

export default useAddSequenceStore;
