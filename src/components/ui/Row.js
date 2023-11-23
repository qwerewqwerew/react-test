import './Row.css';

const Row = (props) => {
	console.log(props);
	const addCls = props.className;
	return <div className={`row ${addCls}`}>{props.children}</div>;
};
export default Row;
