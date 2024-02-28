import { Icon } from "@iconify/react";
import useAddSequenceStore from "../AddSequenceStore";

export default function NavButton(): React.ReactElement {
	const icon = useAddSequenceStore((state) => state.leftButtonIcon);
	const setCurrentStep = useAddSequenceStore((state) => state.setCurrentStep);
	
	const onClick = () => {
		setCurrentStep((prevStep) => (prevStep - 1));
	}
	return (
		<button onClick={onClick}>
			{icon && <Icon icon={icon} height={46} width={52} />}
		</button>
	);
}