import logo from './logo.svg';
import MemberItem from './components/MemberItem';
function App() {
	const MemberDB = [
		{ id: 'm1', name: '김경아', thumb: 'http://qwerew.cafe24.com/images/pet-1.jpg', email: 'abc@defg.com' },
		{ id: 'm2', name: '김망고', thumb: 'http://qwerew.cafe24.com/images/pet-2.jpg', email: 'efg@defg.com' },
		{ id: 'm3', name: '김민정', thumb: 'http://qwerew.cafe24.com/images/pet-3.jpg', email: 'hij@defg.com' },
		{ id: 'm4', name: '윤현선', thumb: 'http://qwerew.cafe24.com/images/pet-4.jpg', email: 'lmn@defg.com' },
		{ id: 'm4', name: '이소정', thumb: 'http://qwerew.cafe24.com/images/pet-5.jpg', email: 'opq@defg.com' },
	];
	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" style={{ width: '100px' }} />
			<MemberItem name={MemberDB[0].name} thumb={MemberDB[0].thumb} email={MemberDB[0].email}/>
			<MemberItem name={MemberDB[1].name} thumb={MemberDB[1].thumb} email={MemberDB[1].email}/>
			<MemberItem name={MemberDB[2].name} thumb={MemberDB[2].thumb} email={MemberDB[2].email}/>
			<MemberItem name={MemberDB[3].name} thumb={MemberDB[3].thumb} email={MemberDB[3].email}/>
			<MemberItem name={MemberDB[4].name} thumb={MemberDB[4].thumb} email={MemberDB[4].email}/>
		</div>
	);
}

export default App;
