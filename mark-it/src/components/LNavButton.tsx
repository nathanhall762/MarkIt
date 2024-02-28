import { Icon } from "@iconify/react";
import useAddSequenceStore from "../AddSequenceStore";

interface NavButtonProps {
	icon?: string;
	onClick?: () => void;
}

export default function NavButton({ onClick }: NavButtonProps): React.ReactElement {
	const icon = useAddSequenceStore((state) => state.leftButtonIcon);
	return (
		<button onClick={onClick}>
			{icon && <Icon icon={icon} height={46} width={52} />}
		</button>
	);
}