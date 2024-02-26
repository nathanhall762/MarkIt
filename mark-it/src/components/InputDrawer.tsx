const InputDrawer: React.FC<{ dataName: string, rows: number }> = ({ dataName, rows }) => {
	return (
		<div className="h-fit w-screen mx-auto max-w-3xl rounded-t-3xl text-center bg-slate-200 absolute bottom-[12vh] py-8 border-t border-black flex flex-col">
			<h2 className="mb-2">Enter {dataName}</h2>
			<textarea name={dataName} id={dataName} rows={rows} className="bg-white p-4 w-stretch rounded-3xl border border-black mx-8" />
		</div>
	);
};

export default InputDrawer;