import { useState } from 'react';
import c from './ListForm.module.css';
import Heading from '../ui/Heading';
const ListForm = (props) => {
	const [inputName, setInputName] = useState('');
	const [inputThumb, setInputThumb] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	const [msg, setMsg] = useState('');
	const submitHandler = (e) => {
		e.preventDefault();
		if (inputName.trim().length === 0 || inputThumb.trim().length === 0 || inputEmail.trim().length === 0) {
			setMsg(<p className={`${c.msg}`}>필수입력양식 입니다.</p>);
		} else {
			setMsg('');
			const newDB = { name: inputName, thumb: inputThumb, email: inputEmail };
			props.addDB(newDB);
			setInputName('');
			setInputThumb('');
			setInputEmail('');
		}
	};

	return (
		<>
			<div className={`${c.listform}`}>
				<Heading content='등록하기' />
				<form onSubmit={submitHandler}>
					<div className={`${c.input_group}`}>
						<label htmlFor='uName'>이름</label>
						<input type='text' name='uName' id='uName' onChange={(e) => setInputName(e.target.value)} value={inputName} />
						{msg}
					</div>
					<div className={`${c.input_group}`}>
						<label htmlFor='uThumb'>사진</label>
						<input type='text' name='uThumb' id='uThumb' onChange={(e) => setInputThumb(e.target.value)} value={inputThumb} />
						{msg}
					</div>
					<div className={`${c.input_group}`}>
						<label htmlFor='uEmail'>이메일</label>
						<input type='text' name='uEmail' id='uEmail' onChange={(e) => setInputEmail(e.target.value)} value={inputEmail} />
						{msg}
					</div>
					<div className={`${c.input_group}`}>
						<button type='submit'>전송</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default ListForm;
