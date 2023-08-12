//import imagen from './assets/foto5.jpg';
import './PresentationCard.css';

const IMAGETEST = 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80'
function PresentationCard() {
	let name = 'Alejo';
	return (
		<div className="presentation-card">
				<img src={IMAGETEST} alt='Unplash photo' />
			<h1> Hola soy {name} estoy en un componente</h1>
		</div>
	);
}

export default PresentationCard;
