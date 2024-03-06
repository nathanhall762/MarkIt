import useAddSequenceStore from './ZustandStore';

const useWorkingItemSubmit = () => {
  const QRCode = useAddSequenceStore((state) => state.QRCode);
  const selectedCollection = useAddSequenceStore(
    (state) => state.selectedCollection
  );
  const actionType = useAddSequenceStore((state) => state.actionType);
  const photo1 = useAddSequenceStore((state) => state.photo1);
  const photo2 = useAddSequenceStore((state) => state.photo2);
  const photo3 = useAddSequenceStore((state) => state.photo3);
  const title = useAddSequenceStore((state) => state.title);
  const description = useAddSequenceStore((state) => state.description);
  const priceRange = useAddSequenceStore((state) => state.priceRange);

  const submit = () => {
    console.log(
      `QRCode: ${QRCode}, selectedCollection: ${selectedCollection}, actionType: ${actionType}, photo1: ${photo1}, photo2: ${photo2}, photo3: ${photo3}, title: ${title}, description: ${description}, priceRange: ${priceRange}`
    );
  };
  return submit;
};

export default useWorkingItemSubmit;
