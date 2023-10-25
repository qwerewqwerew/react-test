import './MemberItem.css';

const MemberItem = () => {
	const memberImg = 'http://qwerew.cafe24.com/images/pet-1.jpg';
	const memberName = '머리묶은 김망고';
	const memberEmail = 'abc@de.com';

	return (
		<ul className="list_body">
			<li className="list_item">
				<div className="list_img">
					<img src={memberImg} alt={memberName} />
				</div>
				<div className="list_desc">
					<span className="title">이름</span>
					<span className="text">{memberName}</span>
				</div>
				<div className="list_desc">
					<span className="title">이메일</span>
					<span className="text">{memberEmail}</span>
				</div>
			</li>
		</ul>
	);
};
export default MemberItem;
