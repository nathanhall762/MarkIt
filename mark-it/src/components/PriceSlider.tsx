import { useState } from 'react';

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
  const [lowerValue, setLowerValue] = useState<number>(min);
  const [upperValue, setUpperValue] = useState<number>(max);

  const handleLowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(
      parseInt(event.target.value, 10),
      upperValue - step
    );
    setLowerValue(newValue);
  };

  const handleUpperChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(
      parseInt(event.target.value, 10),
      lowerValue + step
    );
    setUpperValue(newValue);
  };

  return (
    <div className='h-fit w-screen mx-auto max-w-3xl rounded-t-3xl text-center bg-slate-200 absolute bottom-[12vh] py-8 border-t border-black'>
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
