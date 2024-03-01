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
    `border p-2 rounded-full ${
      actionType === buttonActionType
        ? 'bg-green-500'
        : 'bg-ltbg2 dark:bg-dkbg2'
    }`;

  return (
    <div className='flex flex-col gap-1 w-full text-center p-8 '>
      <h3>Mark this item as:</h3>
      <div className='flex flex-col justify-evenly gap-3 '>
        <button
          className={getButtonClass('store')}
          onClick={onClick}>
          Store
        </button>
        <button
          className={getButtonClass('rent')}
          onClick={onClick}>
          Rent
        </button>
        <button
          className={getButtonClass('sell')}
          onClick={onClick}>
          Sell
        </button>
      </div>
    </div>
  );
};

export default ActionTypeSelector;
