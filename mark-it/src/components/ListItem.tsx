// ListItem.tsx
import React from 'react';
import type { Item } from '../types/items'; // Assuming Item type is exported from CardList or a separate types file
import DeleteButton from './DeleteButton'; // Import the DeleteButton component
import useAddSequenceStore, { useAuthStore } from '../ZustandStore'; // Import ZustandStore and useAuthStore

const ListItem: React.FC<Item> = ({
  actionType,
  itemDetails: { QRCode: id, photos, title, priceRange, description },
}) => {
  const collectionId = useAddSequenceStore((state) => state.selectedCollection);
  const userId = useAuthStore((state) => state.user?.uid);
  return (
    <div className="flex w-full items-center justify-between p-4 border-b h-32 bg-surface-subtle">
      <img src={photos[0]} alt={title} className="w-20 h-20 object-cover mr-4" />
      <div className="grow overflow-hidden">
        <h5 className="text-lg font-bold truncate">{title}</h5>
        <p className="text-ellipsis overflow-hidden line-clamp-2">{description}</p>
      </div>
      <div className="text-right pl-2">
        <div className="text-sm uppercase">{actionType}</div>
        <div className="font-bold whitespace-nowrap">
          ${typeof priceRange === 'number' ? priceRange : `${priceRange.min}-${priceRange.max}`}
        </div>
      {userId && <DeleteButton itemId={id} collectionId={collectionId} userId={userId} />}
      </div>
    </div>
  );
};

export default ListItem;
