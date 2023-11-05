import ItemThumb from './ItemThumb';
import ItemDesc from './ItemDesc';

const MemberItemList = (props) => {
  console.log("MemberItemList",props);
	return (
		<li className='list_item'>
			<ItemThumb thumb={props.thumb} />
			<ItemDesc name={props.name} email={props.email} />
		</li>
	);
};
export default MemberItemList;
