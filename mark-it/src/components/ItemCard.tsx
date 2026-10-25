import type {Item} from '../types/item.ts';
import DeleteButton from './DeleteButton';
import useAddSequenceStore, {useAuthStore} from '../ZustandStore';

const ItemCard: React.FC<Item> = ({
  itemDetails
}) => {
  const collectionId = useAddSequenceStore((state) => state.selectedCollection);
  const setItemPageVisible = useAddSequenceStore((state) => state.setItemPageVisible);
  const userId = useAuthStore((state) => state.user?.uid);
  const itemID = useAddSequenceStore((state) => state.itemID);
  const setItemID = useAddSequenceStore((state) => state.setItemID);
  const handleClick = () => {
    console.log('Item clicked', itemDetails.QRCode); // This should log the correct QR code
    setItemID(itemDetails.QRCode); // Use the QRCode from itemDetails to set the item ID
    setItemPageVisible(true); // Assuming the second argument should be itemID or some other identifier
  };
  
  return (
    <div className="bg-surface-subtle flex flex-col w-full mx-4 max-w-sm rounded-3xl text-center justify-stretch border relative shadow-xl" onClick={handleClick}>
      <div className="w-full rounded-t-3xl">
        <img
          className="w-full aspect-square object-cover rounded-t-3xl"
          src={itemDetails.photos[0]}
          alt={itemDetails.title}
          loading='lazy'
        />
      </div>
      <div className="py-2 border-y">{itemDetails.description}</div>
      <div className=" flex flex-row justify-between rounded-b-3xl">
        <div className="border-r py-2 text-center w-1/3 rounded-bl-3xl">
          ${typeof itemDetails.priceRange === 'object' ? itemDetails.priceRange.max : itemDetails.priceRange}
        </div>
        <div className=" py-2 action-type text-center w-2/3 rounded-br-3xl">
          {itemDetails.title}
        </div>
      </div>
      {userId && <DeleteButton itemId={itemDetails.QRCode} collectionId={collectionId} userId={userId} />}
    </div>
  );
};

export default ItemCard;
