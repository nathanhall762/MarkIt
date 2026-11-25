import { useEffect } from 'react';
import useAddSequenceStore from '../ZustandStore';

interface TextInputProps {
  field: 'title' | 'description';
  rows: number;
  commitStep: 'review' | 'set-price';
}

const TextInput: React.FC<TextInputProps> = ({
  field,
  rows,
  commitStep,
}) => {
  const currentStep = useAddSequenceStore((state) => state.currentStep);

  const preview = useAddSequenceStore((state) =>
    field === 'title' ? state.titlePreview : state.descriptionPreview
  );

  const setPreview = useAddSequenceStore((state) =>
    field === 'title' ? state.setTitlePreview : state.setDescriptionPreview
  );

  const setValue = useAddSequenceStore((state) =>
    field === 'title' ? state.setTitle : state.setDescription
  );

  useEffect(() => {
    if (currentStep === commitStep) {
      setValue(preview);
    }
  }, [currentStep, commitStep, preview, setValue]);

  const label = field === 'title' ? 'Enter Title' : 'Enter Description';

  return (
    <div className="my-8 flex flex-col">
      <h2 className="mb-2">{label}</h2>

      <textarea
        name={field}
        id={field}
        rows={rows}
        value={preview}
        onChange={(event) => setPreview(event.target.value)}
        className="mx-8 rounded-3xl border bg-white p-4"
      />
    </div>
  );
};

export default TextInput;