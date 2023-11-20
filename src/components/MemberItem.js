import './MemberItem.css';
import MemberItemList from './MemberItemList';
const MemberItem = (props) => {

	return (
		<ul className='list_body'>
			{/* 			<MemberItemList id={props.db[0].id} thumb={props.db[0].thumb} name={props.db[0].name} email={props.db[0].email} />
			<MemberItemList id={props.db[1].id} thumb={props.db[1].thumb} name={props.db[1].name} email={props.db[1].email} />
			<MemberItemList id={props.db[2].id} thumb={props.db[2].thumb} name={props.db[2].name} email={props.db[2].email} />
			<MemberItemList id={props.db[3].id} thumb={props.db[3].thumb} name={props.db[3].name} email={props.db[3].email} />
			<MemberItemList id={props.db[4].id} thumb={props.db[4].thumb} name={props.db[4].name} email={props.db[4].email} /> */}
			{props.db.map((item) => {
				return <MemberItemList key={item.id} id={item.id} thumb={item.thumb} name={item.name} email={item.email} />;
			})}
		</ul>
	);
};
export default MemberItem;
