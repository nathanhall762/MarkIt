import type {Item} from './CardList';

const ItemCard: React.FC<Item> = ({
  photos, // Adjust accordingly if handling multiple images
  title,
  priceRange,
  actionType,
  description,
}) => {
  return (
    <div className="flex flex-col w-full mx-4 max-w-sm rounded-3xl text-center justify-stretch border">
      <div className="w-full rounded-t-3xl">
        <img
          className="w-full aspect-square object-cover rounded-t-3xl"
          src={photos[0]}
          alt={title}
        />
      </div>
      <div className="py-2 border">{title}</div>
      <div className="border flex flex-row justify-between rounded-b-3xl">
        <div className="border py-2 text-center w-1/3 rounded-bl-3xl">
          ${typeof priceRange === 'object' ? priceRange.min : priceRange}
        </div>
        <div className="border py-2 action-type text-center w-2/3 rounded-br-3xl">
          {actionType}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
