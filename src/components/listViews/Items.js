import ItemEl from './ItemEl';
import Row from '../ui/Row';
import './Items.css';

const Items = (props) => {
	return (
		<Row className='items'>
			<img src={props.thumb} alt={props.name} />
			<ItemEl title='이름' content={props.name} />
			<ItemEl title='이메일' content={props.email} />
		</Row>
	);
};
export default Items;
