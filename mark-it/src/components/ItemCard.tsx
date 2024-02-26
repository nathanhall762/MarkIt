export interface ItemProps {
  imageSrc: string;
  title: string;
  price?: number;
  actionType?: string;
}

const ItemCard: React.FC<ItemProps> = ({
  imageSrc,
  title,
  price,
  actionType,
}) => {
  return (
    <div className='flex flex-col h-fit w-[90vw] rounded-3xl text-center justify-stretch border border-black'>
      <div className='w-full h-[90vw] rounded-t-3xl flex items-center'>
        <img
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className='py-2 border'>{title}</div>
      <div className='border flex flex-row justify-between rounded-b-3xl'>
        <div className='border py-2 text-center w-[30%] rounded-bl-3xl'>
          ${price}
        </div>
        <div className='border py-2 action-type text-center w-[70%] rounded-br-3xl'>
          {actionType}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
