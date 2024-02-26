import type { ItemProps } from './ItemCard';
import ItemImageCarousel from './ItemImageCarousel';

const ItemPage: React.FC<ItemProps> = ({
  imageSrc,
  title,
  price,
  actionType,
}) => {
  return (
    <div className='flex relative flex-col w-[90vw] text-center justify-start h-full md:w-full md:box-border md:px-4 py-4'>
      <div className='py-2 border mb-4'>{title}</div>
      <ItemImageCarousel
        imageSrc={imageSrc}
        title={title}
      />
      <div className='border py-2 mb-4 action-type text-center rounded-3xl'>
        {actionType}
      </div>
      <div className='border flex flex-row justify-between mb-4'>
        <div className='border py-2 text-center w-[30%]'>${price}</div>
        <div className='border py-2 action-type text-center w-[70%]'>
          location
        </div>
      </div>
      <p>
        Optical audio cable from Amazon Basics, often used to connect a TV to a
        soundbar. 6ft. New in box.
      </p>
    </div>
  );
};

export default ItemPage;
