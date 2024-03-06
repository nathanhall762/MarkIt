import type {Item} from './CardList';

const ItemCard: React.FC<Item> = ({
  photos, // Adjust accordingly if handling multiple images
  title,
  priceRange,
  actionType,
  description,
}) => {
  return (
    <div className='flex flex-col h-fit w-[90vw] max-w-[70vh] max-h-[70vh] rounded-3xl text-center justify-stretch border'>
      <div className='w-full h-[90vw] rounded-t-3xl flex items-center'>
        <img
        className="w-full h-full object-cover rounded-t-3xl"
          src={photos[0]}
          alt={title}
        />
      </div>
      <div className='py-2 border'>{title}</div>
      <div className='border flex flex-row justify-between rounded-b-3xl'>
        <div className='border py-2 text-center w-[30%] rounded-bl-3xl'>
          ${typeof priceRange === 'object' ? priceRange.min : priceRange}
        </div>
        <div className='border py-2 action-type text-center w-[70%] rounded-br-3xl'>
          {actionType}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
