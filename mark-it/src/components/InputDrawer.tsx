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
  const title = useAddSequenceStore((state) => state.title);
  const titlePreview = useAddSequenceStore((state) => state.titlePreview);
  const description = useAddSequenceStore((state) => state.description);
  const setTitlePreview = useAddSequenceStore((state) => state.setTitlePreview);
  const descriptionPreview = useAddSequenceStore((state) => state.description);
  const setDescriptionPreview = useAddSequenceStore(
    (state) => state.setDescription
  );
  console.log('Current Step:', currentStep);

  useEffect(() => {
    if (dataName === 'Title') {
      setTitlePreview(inputValue);
    } else if (dataName === 'Description') {
      setDescriptionPreview(inputValue);
    }
  }, [inputValue, dataName]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  let placeholderText = '';
  if (dataName === 'Title') {
    placeholderText = title;
  } else if (dataName === 'Description') {
    placeholderText = description;
  }

  return (
    <div className='h-fit w-screen mx-auto max-w-3xl rounded-t-3xl text-center bg-slate-200 absolute bottom-[12vh] py-8 border-t border-black flex flex-col'>
      <h2 className='mb-2'>Enter {dataName}</h2>
      <textarea
        name={dataName}
        id={dataName}
        rows={rows}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholderText}
        className='bg-white p-4 w-stretch rounded-3xl border border-black mx-8'
      />
    </div>
  );
};

export default InputDrawer;
