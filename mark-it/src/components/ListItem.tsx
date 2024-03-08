// ListItem.tsx
import React from 'react';
import type { Item } from './CardList'; // Assuming Item type is exported from CardList or a separate types file

const ListItem: React.FC<Item> = ({
  photos,
  title,
  priceRange,
  actionType,
  description,
}) => {
  return (
    <div className="flex w-full items-center justify-between p-4 border-b h-32">
      <img src={photos[0]} alt={title} className="w-20 h-20 object-cover mr-4" />
      <div className="flex-grow overflow-hidden">
        <h5 className="text-lg font-bold truncate">{title}</h5>
        <p className="text-ellipsis overflow-hidden line-clamp-2">{description}</p>
      </div>
      <div className="text-right pl-2">
        <div className="text-sm uppercase">{actionType}</div>
        <div className="font-bold whitespace-nowrap">
          ${typeof priceRange === 'number' ? priceRange : `${priceRange.min}-${priceRange.max}`}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
