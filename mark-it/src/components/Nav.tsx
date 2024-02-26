import CenterNavButton from './CenterNavButton';
import LRNavButton from './LRNavButton';

export default function Nav() {
	return (
		<div className="flex justify-evenly items-center border-t border-black relative w-full h-[12vh]">
			<LRNavButton icon='ep:back' />
			<CenterNavButton icon='tabler:plus'/>
			<LRNavButton icon='charm:menu-hamburger' />
		</div>
	);
}