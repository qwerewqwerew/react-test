import { useState } from 'react';
import ItemEl from './ItemEl';
import Row from '../ui/Row';
import './Items.css';

const Items = (props) => {
	const initName = props.name;
	const [name, setName] = useState(props.name);
	const [count, setCount] = useState(0);

	function clickHandler() {
		setCount(1);
		if (count == 1) {
			setName('변경');
			setCount(0);
		} else {
			setName(initName);
		}
	}

	return (
		<div className='items'>
			<img src={props.thumb} alt={props.name} />
				<ItemEl title='이름' content={props.name} />
				<ItemEl title='이메일' content={props.email} />
		</div>
	);
};
export default Items;
