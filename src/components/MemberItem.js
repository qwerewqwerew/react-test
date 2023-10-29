import './MemberItem.css';
import ItemThumb from './ItemThumb';
import ItemDesc from './ItemDesc';
const MemberItem = (props) => {
	console.log(props);
	return (
		<ul className="list_body">
			<li className="list_item">
				<ItemThumb thumb={props.thumb} />
				<ItemDesc name={props.name} email={props.email} />
			</li>
		</ul>
	);
};
export default MemberItem;
