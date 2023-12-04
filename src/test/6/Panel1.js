const Panel = ({ title, children, active, onActive }) => {
	console.log('active',active);
	console.log('onActive',onActive);
	return (
		<section className='panel'>
			<h3>{title}</h3>
			{!active ? <button onClick={()=>onActive(!active)}>더보기</button> : <p>{children}</p>}
			<hr />
		</section>
	);
};
export default Panel;
