import Box from './Box';
import CompAA from './CompAA';

const style = {
	color: 'white',
	width: '80%',
	padding: '20px',
	background: '#d3b1b1',
	textAlign: 'center',
};
const CompA = (props) => {
	return (
		<>
			<h1>CompA</h1>
			<Box style={style}>
				<CompAA />
			</Box>
			<Box style={style}>
				<CompAA />
			</Box>
			<Box style={style}>
				<CompAA />
			</Box>
		</>
	);
};
export default CompA;
