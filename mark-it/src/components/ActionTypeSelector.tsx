import useAddSequenceStore from '../AddSequenceStore';

const ActionTypeSelector = () => {
  const { actionType, setActionType } = useAddSequenceStore((state) => ({
    actionType: state.actionType,
    setActionType: state.setActionType,
  }));

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newActionType = event.currentTarget.textContent?.toLowerCase();
    if (newActionType) {
      setActionType(newActionType);
    }
  };

  const getButtonClass = (buttonActionType: string) => 
    `border border-black p-2 rounded-full ${actionType === buttonActionType ? 'bg-green-500' : ''}`;

  return (
    <div className='flex flex-col gap-1 w-full text-center p-8'>
      <h3>Mark this item as:</h3>
      <div className='flex flex-col justify-evenly gap-3'>
        <button className={getButtonClass('store')} onClick={onClick}>Store</button>
        <button className={getButtonClass('rent')} onClick={onClick}>Rent</button>
        <button className={getButtonClass('sell')} onClick={onClick}>Sell</button>
      </div>
    </div>
  );
};

export default ActionTypeSelector;
