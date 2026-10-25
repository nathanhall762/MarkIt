
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
  instructions,
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
    <div className="flex h-fit w-full flex-col py-8 text-center">
      <h2 className="mb-2 px-4">{instructions}</h2>

      <div className="px-5 py-4">
        <input
          type="range"
          min={min}
          max={max}
          value={lowerValue}
          step={step}
          onChange={handleLowerChange}
          className="slider"
          style={{
            zIndex: lowerValue > max - (max - min) / 2 ? 5 : 1,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={upperValue}
          step={step}
          onChange={handleUpperChange}
          className="slider"
        />

        <p className="text-center">
          Price range: ${lowerValue} - ${upperValue}
        </p>
      </div>
    </div>
  );
};

export default PriceSlider;
