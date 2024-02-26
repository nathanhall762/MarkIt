import type { ItemProps } from './ItemCard';

const ItemImageCarousel: React.FC<ItemProps> = ({ imageSrc, title }) => {
  return (
    <div className='flex items-center flex-col mb-4'>
      <div className='aspect-square bg-slate-100 mb-2'>
        <img
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className='flex justify-center'>
        <div className='w-4 h-4 bg-gray-500 border border-black rounded-full mx-0.5'></div>
        <div className='w-4 h-4 bg-gray-500 border border-black bg-transparent rounded-full mx-0.5'></div>
        <div className='w-4 h-4 bg-gray-500 border border-black bg-transparent rounded-full mx-0.5'></div>
        <div className='w-4 h-4 bg-gray-500 border border-black bg-transparent rounded-full mx-0.5'></div>
      </div>
    </div>
  );
};

export default ItemImageCarousel;
