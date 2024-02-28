import { Icon } from "@iconify/react";
import useAddSequenceStore from "../AddSequenceStore";

interface NavButtonProps {
	icon?: string;
	onClick?: () => void;
}

export default function NavButton({ onClick }: NavButtonProps): React.ReactElement {
	const isCenterButtonEnabled = useAddSequenceStore((state) => state.isCenterButtonEnabled);
	const icon = useAddSequenceStore((state) => state.centerButtonIcon);
	const iconColor = isCenterButtonEnabled ? "green" : "gray";
	const handleClick = isCenterButtonEnabled ? onClick : undefined;
	return (
	  <button
		className={`border rounded-2xl ${isCenterButtonEnabled ? '' : 'cursor-not-allowed'}`}
		onClick={handleClick}
		disabled={!isCenterButtonEnabled}
	  >
		{icon && <Icon icon={icon} height={76} width={112} color={iconColor} />}
	  </button>
	);
  }