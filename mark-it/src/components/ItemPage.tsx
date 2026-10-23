import type { Item } from '../types/items.ts';
import ItemImageCarousel from './ItemImageCarousel';

const ItemPage: React.FC<Item> = ({
  actionType,
  itemDetails: {
    QRCode,
    description,
    photos,
    priceRange,
    title,
  },
}) => {
  const maxPrice = typeof priceRange === 'object' ? priceRange.max : priceRange;
  return (
    <div id='ItemPage' className='flex relative flex-col w-[90vw] text-center justify-start h-full max-w-lg py-4'>
      <div className='py-2 border mb-4 bg-surface-brand'>{title}</div>
      <ItemImageCarousel
        photos={photos}
        title={title}
      />
      <div className='border py-2 mb-4 action-type text-center rounded-3xl bg-surface-brand'>
        {actionType}
      </div>
      <div className='border flex flex-row justify-between mb-4'>
        <div className='border py-2 text-center w-[30%] bg-surface-brand'>{maxPrice}</div>
        <div className='border py-2 action-type text-center w-[70%] bg-surface-brand'>
          location
        </div>
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};

export default ItemPage;
