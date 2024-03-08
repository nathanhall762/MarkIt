import { useEffect, useState } from 'react';
import useAddSequenceStore from '../ZustandStore';

export const InputDrawerTitle: React.FC<{ rows: number }> = ({ rows }) => {
  const { currentStep, titlePreview, setTitlePreview, setTitle } =
    useAddSequenceStore((state) => ({
      currentStep: state.currentStep,
      titlePreview: state.titlePreview,
      setTitlePreview: state.setTitlePreview,
      setTitle: state.setTitle,
    }));

  const [inputValue, setInputValue] = useState('');

  // Synchronize inputValue with titlePreview
  useEffect(() => {
    setInputValue(titlePreview);
  }, [titlePreview]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setTitlePreview(newValue); // Update the preview in the store as user types
  };

  // Commit titlePreview to title when moving from step 6 to step 7
  useEffect(() => {
    if (currentStep === 7) {
      setTitle(titlePreview);
    }
  }, [currentStep, titlePreview, setTitle]);

  return (
    <div className='h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col'>
      <h2 className='mb-2'>Enter Title</h2>
      <textarea
        name='title'
        id='title'
        rows={rows}
        value={inputValue}
        onChange={handleInputChange}
        className='bg-white p-4 w-stretch rounded-3xl border mx-8'
      />
    </div>
  );
};

export const InputDrawerDescription: React.FC<{ rows: number }> = ({
  rows,
}) => {
  const {
    currentStep,
    descriptionPreview,
    setDescriptionPreview,
    setDescription,
  } = useAddSequenceStore((state) => ({
    currentStep: state.currentStep,
    descriptionPreview: state.descriptionPreview,
    setDescriptionPreview: state.setDescriptionPreview,
    setDescription: state.setDescription,
  }));

  const [inputValue, setInputValue] = useState('');

  // Synchronize inputValue with descriptionPreview
  useEffect(() => {
    setInputValue(descriptionPreview);
  }, [descriptionPreview]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setDescriptionPreview(newValue); // Update the preview in the store as user types
  };

  // Commit descriptionPreview to description after a specific action or step transition
  // Assuming the commit should happen at step 8 or whenever you deem appropriate
  useEffect(() => {
    if (currentStep === 8) {
      setDescription(descriptionPreview);
    }
  }, [currentStep, descriptionPreview, setDescription]);

  return (
    <div className='h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col'>
      <h2 className='mb-2'>Enter Description</h2>
      <textarea
        name='description'
        id='description'
        rows={rows}
        value={inputValue}
        onChange={handleInputChange}
        className='bg-white p-4 w-stretch rounded-3xl border mx-8'
      />
    </div>
  );
};
