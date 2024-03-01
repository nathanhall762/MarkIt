import useAddSequenceStore from "../AddSequenceStore";

const CameraDrawer: React.FC = () => {
	const photo1 = useAddSequenceStore((state) => state.photo1);
	const photo2 = useAddSequenceStore((state) => state.photo2);
	const photo3 = useAddSequenceStore((state) => state.photo3);
	return (
		<div className="h-fit w-full mx-auto max-w-3xl rounded-t-3xl text-center bg-ltbg2 dark:bg-dkbg2 absolute bottom-[12vh] py-4 border-t">
			<h2 className="mb-2">Take Photo 1/3</h2>
			<div className="mx-8 rounded-full flex justify-center gap-4">
				<div className={`h-8 w-8 rounded-full border ${photo1 ? 'bg-black' : 'bg-white'}`}></div>
				<div className={`h-8 w-8 rounded-full border ${photo2 ? 'bg-black' : 'bg-white'}`}></div>
				<div className={`h-8 w-8 rounded-full border ${photo3 ? 'bg-black' : 'bg-white'}`}></div>
			</div>
		</div>
	);
};

export default CameraDrawer;