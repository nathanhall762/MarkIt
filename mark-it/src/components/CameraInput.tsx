
import useAddSequenceStore from '../ZustandStore';

const CameraInput: React.FC = () => {
  const photo1 = useAddSequenceStore((state) => state.photo1);
  const photo2 = useAddSequenceStore((state) => state.photo2);
  const photo3 = useAddSequenceStore((state) => state.photo3);

  const photos = [photo1, photo2, photo3];

  return (
    <div className="z-40 my-8 flex flex-col items-center justify-center gap-4">
      <h2 className="mb-2">Take Photo</h2>

      <div className="mx-8 flex justify-center gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`h-8 w-8 rounded-full border ${
              photo ? 'bg-success' : 'bg-danger'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CameraInput;
