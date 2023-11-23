import './ItemEl.css';
import Row from '../ui/Row';

const ItemEl = (props) => {
	return (
		<Row className='item_el'>
			<span className='title'>{props.title}</span>
			<span className='content'>{props.content}</span>
		</Row>
	);
};
export default ItemEl;
