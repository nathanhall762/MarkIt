import type { Item } from "../types/item";

interface ItemImageCarouselProps {
  photos: string[];
  title: string;
}

const ItemImageCarousel: React.FC<ItemImageCarouselProps> = ({ photos, title }) => {
  return (
    <div className='flex items-center flex-col mb-4'>
      <div className='aspect-square bg-slate-100 mb-2'>
        <img
          className='w-full h-full object-cover aspect-square'
          src={photos[0]}
          alt={title}
        />
      </div>
      <div className='flex justify-center'>
        <div className='w-4 h-4 bg-dkbg2 dark:bg-ltbg2 border rounded-full mx-0.5'></div>
        {/* <div className='w-4 h-4 bg-dkbg2 dark:bg-ltbg2 border bg-transparent dark:bg-transparent rounded-full mx-0.5'></div>
        <div className='w-4 h-4 bg-dkbg2 dark:bg-ltbg2 border bg-transparent dark:bg-transparent rounded-full mx-0.5'></div>
        <div className='w-4 h-4 bg-dkbg2 dark:bg-ltbg2 border bg-transparent dark:bg-transparent rounded-full mx-0.5'></div> */}
      </div>
    </div>
  );
};

export default ItemImageCarousel;
