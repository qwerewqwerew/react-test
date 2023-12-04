import Box from './Box';
const style = {
	color: 'white',
	background: '#a5b1b1',
	textAlign: 'center',
	display: 'inline-block',
	padding: '20px',
};
const CompAA = (props) => {
	return (
		<>
			<Box style={style}>CompAA</Box>
			<Box style={style}>CompAA</Box>
			<Box style={style}>CompAA</Box>
		</>
	);
};
export default CompAA;
