import './Lists.css';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import Items from './Items';

const Lists = (props) => {
	return (
		<>
			<Heading content='title' />
			<Row className='list'>
				{props.db.map((item) => {
					return <Items key={item.id} id={item.id} thumb={item.thumb} name={item.name} email={item.email} />;
				})}
			</Row>
		</>
	);
};
export default Lists;
