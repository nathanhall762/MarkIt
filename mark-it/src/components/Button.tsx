import React from 'react';

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<button className="button px-4 py-2 hover:bg-primary hover:scale-105 transition-transform bg-secondary text-white rounded-md" onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;