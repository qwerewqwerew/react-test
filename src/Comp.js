import Box from './Box';
import CompA from './CompA';
const style = {
	color: 'white',
	background: '#23b1c2',
	width: '50%',
	textAlign: 'center',
	margin: '20px auto',
	padding: '20px',
};
const Comp = (props) => {
	return (
		<Box style={style}>
			<CompA />
		</Box>
	);
};
export default Comp;
