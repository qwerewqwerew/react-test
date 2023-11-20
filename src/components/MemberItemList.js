import { useState } from 'react';
import ItemThumb from './ItemThumb';
import ItemDesc from './ItemDesc';

const MemberItemList = (props) => {
	//let name = props.name;
	//const changeName = useState();
	//const newName = changeName[0];
	//const newNameFn = changeName[1];
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
		<li className='list_item'>
			<ItemThumb thumb={props.thumb} />
			<ItemDesc name={name} email={props.email} />
			<button onClick={clickHandler}>이름변경</button>
		</li>
	);
};
export default MemberItemList;
