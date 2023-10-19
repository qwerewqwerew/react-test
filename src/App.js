import logo from './logo.svg';

import MemberItem from './components/MemberItem';
function App() {
	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" style={{ width: '100px' }} />
			<MemberItem />
		</div>
	);
}

export default App;
