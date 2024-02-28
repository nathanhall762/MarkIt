import { useEffect, useState } from 'react';
import useAddSequenceStore from '../AddSequenceStore';

const InputDrawer: React.FC<{ dataName: string; rows: number }> = ({
  dataName,
  rows,
}) => {
  const [inputValue, setInputValue] = useState('');
  const setTitle = useAddSequenceStore((state) => state.setTitle);
  const setDescription = useAddSequenceStore((state) => state.setDescription);
  const currentStep = useAddSequenceStore((state) => state.currentStep);
  console.log('Current Step:', currentStep);

  useEffect(() => {
	// TODO: textarea and state needs reworked. textarea should show the current value of the state, and the state should be updated on change.
    if (dataName === 'Title') {
      setTitle(inputValue);
    } else if (dataName === 'Description') {
      setDescription(inputValue);
    }

    if (currentStep > 6) {
      setInputValue('');
    }
  }, [dataName, inputValue, setTitle, setDescription, currentStep]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='h-fit w-screen mx-auto max-w-3xl rounded-t-3xl text-center bg-slate-200 absolute bottom-[12vh] py-8 border-t border-black flex flex-col'>
      <h2 className='mb-2'>Enter {dataName}</h2>
      <textarea
        name={dataName}
        id={dataName}
        rows={rows}
        value={inputValue}
        onChange={handleInputChange}
        className='bg-white p-4 w-stretch rounded-3xl border border-black mx-8'
      />
    </div>
  );
};

export default InputDrawer;
