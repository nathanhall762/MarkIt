import type {Item} from './CardList';
import DeleteButton from './DeleteButton';
import useAddSequenceStore, {useAuthStore} from '../ZustandStore';

const ItemCard: React.FC<Item> = ({
  id,
  photos, // Adjust accordingly if handling multiple images
  title,
  priceRange,
  actionType,
  description,
}) => {
  const collectionId = useAddSequenceStore((state) => state.selectedCollection);
  const setItemPageVisible = useAddSequenceStore((state) => state.setItemPageVisible);
  const userId = useAuthStore((state) => state.user?.uid);
  const handleClick = () => {
    setItemPageVisible(true);
  };
  return (
    <div className="flex flex-col w-full mx-4 max-w-sm rounded-3xl text-center justify-stretch border relative" onClick={handleClick}>
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
      {userId && <DeleteButton itemId={id} collectionId={collectionId} userId={userId} />}
    </div>
  );
};

export default ItemCard;
