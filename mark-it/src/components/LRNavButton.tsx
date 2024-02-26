import { Icon } from "@iconify/react";
import React from "react";

interface NavButtonProps {
	icon?: string;
	onClick?: () => void;
}

export default function NavButton({ icon, onClick }: NavButtonProps): React.ReactElement {
	return (
		<button onClick={onClick}>
			{icon && <Icon icon={icon} height={46} width={52} />}
		</button>
	);
}