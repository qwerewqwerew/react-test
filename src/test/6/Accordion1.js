import { useState } from 'react';
import Panel from './Panel';

const Accordion = (props) => {
	const [active, setActive] = useState(false);

	return (
		<>
			<h2>글타래</h2>
			<Panel
				title='자동차'
				active={active}
				onActive={(x) => {
					console.log("부모가받은x",x);
					setActive(x);
				}}>
				BMW가 차세대 5시리즈의 데뷔 시점을 2023년 10월로 확정짓고, 적용될 주요 신기술들을 공개했다.
			</Panel>
			<Panel
				title='스포츠'
				active={active}
				onActive={(x) => {
					console.log("부모가받은x",x);
					setActive(x);
				}}>
				[오늘의 MLB] 배지환, 천금같은 2타점 적시타...피츠버그 4연패 탈출! [출처] [오늘의 MLB] 배지환, 천금같은 2타점 적시타...피츠버그 4연패 탈출!|작성자 이현우
			</Panel>
		</>
	);
};
export default Accordion;
