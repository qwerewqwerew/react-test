const style = {
	marginRight: '20px',
	marginTop: '20px',
	borderRadius: '20px',
};
const Box = (props) => {
	console.log(props);
	const newStyle = { ...style, ...props.style };
	return <div style={newStyle}>{props.children}</div>
};
export default Box;
