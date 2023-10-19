import './MemberItem.css';

const MemberItem = () => {
	return (
		<ul className="list_body">
			<li className="list_item">
				<div className="list_img">
					<img src="http://qwerew.cafe24.com/images/pet-1.jpg" alt="" />
				</div>
				<div className="list_desc">
					<span className="title">이름</span>
					<span className="text">머리묶은 김망고</span>
				</div>
				<div className="list_desc">
					<span className="title">이메일</span>
					<span className="text">abc@de.com</span>
				</div>
			</li>
			<li className="list_item">
				<div className="list_img">
					<img src="http://qwerew.cafe24.com/images/pet-1.jpg" alt="" />
				</div>
				<div className="list_desc">
					<span className="title">이름</span>
					<span className="text">머리묶은 김망고</span>
				</div>
				<div className="list_desc">
					<span className="title">이메일</span>
					<span className="text">abc@de.com</span>
				</div>
			</li>
		</ul>
	);
};
export default MemberItem;
