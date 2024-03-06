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
    <div className="flex items-center justify-between p-4 border-b">
      <img src={photos[0]} alt={title} className="w-20 h-20 object-cover mr-4" /> {/* Thumbnail */}
      <div className="flex-grow">
        <h5 className="text-lg font-bold">{title}</h5>
        <p>{description}</p>
      </div>
      <div className="text-right">
        <div className="text-sm">{actionType.toUpperCase()}</div>
        <div className="font-bold">
          ${typeof priceRange === 'number' ? priceRange : `${priceRange.min}-${priceRange.max}`}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
