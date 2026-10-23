import { useState } from 'react';
import useAddSequenceStore from '../ZustandStore';

interface PriceSliderProps {
  min: number;
  max: number;
  step: number;
  instructions: string;
}

const PriceSlider: React.FC<PriceSliderProps> = ({
  min,
  max,
  step,
  instructions: dataName,
}) => {
  const priceRange = useAddSequenceStore((state) => state.priceRange);
  const setPriceRange = useAddSequenceStore((state) => state.setPriceRange);
  const [lowerValue, setLowerValue] = useState<number>(priceRange[0]);
  const [upperValue, setUpperValue] = useState<number>(priceRange[1]);

  const handleLowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(
      parseInt(event.target.value, 10),
      upperValue - step
    );
    setLowerValue(newValue);
    setPriceRange([newValue, upperValue]);
  };

  const handleUpperChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(
      parseInt(event.target.value, 10),
      lowerValue + step
    );
    setUpperValue(newValue);
    setPriceRange([lowerValue, newValue]);
  };

  return (
    <div className='h-fit w-screen mx-auto rounded-t-3xl text-center bg-surface-brand fixed bottom-[12vh] py-8 border-t flex flex-col'>
      <h2 className='mb-2 px-4'>{dataName}</h2>
      <div style={{ padding: '20px' }}>
        <input
          type='range'
          min={min}
          max={max}
          value={lowerValue}
          step={step}
          onChange={handleLowerChange}
          className='slider'
          style={{ zIndex: lowerValue > max - (max - min) / 2 ? '5' : '1' }} // Ensures the lower slider is accessible
        />
        <input
          type='range'
          min={min}
          max={max}
          value={upperValue}
          step={step}
          onChange={handleUpperChange}
          className='slider'
        />
        <div className='text-center'>
          <p>
            Price range: ${lowerValue} - ${upperValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
