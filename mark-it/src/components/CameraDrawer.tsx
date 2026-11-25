import useAddSequenceStore from '../ZustandStore';

const CameraDrawer: React.FC = () => {
  const photo1 = useAddSequenceStore((state) => state.photo1);
  const photo2 = useAddSequenceStore((state) => state.photo2);
  const photo3 = useAddSequenceStore((state) => state.photo3);
  return (
    <div
      id="InputDrawer"
      className="absolute bottom-0 left-0 flex h-fit w-full flex-col
    rounded-t-3xl border-t border-border text-center bg-brand-primary
    pb-[12vh]"
    >
      <div className='flex flex-col justify-center items-center z-40 gap-4 my-8'>
        <h2 className='mb-2'>Take Photo</h2>
        <div className='mx-8 rounded-full flex justify-center gap-4'>
          <div
            className={`h-8 w-8 rounded-full border ${photo1 ? 'bg-success' : 'bg-danger'
              }`}></div>
        </div></div>
    </div>
  );
};

export default CameraDrawer;
