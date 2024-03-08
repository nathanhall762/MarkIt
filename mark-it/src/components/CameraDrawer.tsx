import useAddSequenceStore from '../ZustandStore';

const CameraDrawer: React.FC = () => {
  const photo1 = useAddSequenceStore((state) => state.photo1);
  const photo2 = useAddSequenceStore((state) => state.photo2);
  const photo3 = useAddSequenceStore((state) => state.photo3);
  return (
    <div className='h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col'>
      <h2 className='mb-2'>Take Photo</h2>
      <div className='mx-8 rounded-full flex justify-center gap-4'>
        <div
          className={`h-8 w-8 rounded-full border ${
            photo1 ? 'bg-black' : 'bg-white'
          }`}></div>
        {/* <div className={`h-8 w-8 rounded-full border ${photo2 ? 'bg-black' : 'bg-white'}`}></div>
				<div className={`h-8 w-8 rounded-full border ${photo3 ? 'bg-black' : 'bg-white'}`}></div> */}
      </div>
    </div>
  );
};

export default CameraDrawer;
