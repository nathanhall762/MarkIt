import { Icon } from "@iconify/react";
import React from "react";

interface NavButtonProps {
	icon?: string;
	onClick?: () => void;
}

export default function NavButton({ icon, onClick }: NavButtonProps): React.ReactElement {
	return (
		<button className="border rounded-2xl" onClick={onClick}>
			{icon && <Icon icon={icon} height={76} width={112} />}
		</button>
	);
}