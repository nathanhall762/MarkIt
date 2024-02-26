const ActionTypeSelector = () => {
  return (
    <div className="flex flex-col gap-1 w-full text-center p-8">
      <h3>Mark this item as:</h3>
      <div className='flex flex-col justify-evenly gap-3'>
        <button className='border border-black p-2 rounded-full'>Store</button>
        <button className='border border-black p-2 rounded-full'>Rent</button>
		<button className='border border-black p-2 rounded-full'>Sell</button>
      </div>
    </div>
  );
};

export default ActionTypeSelector;
