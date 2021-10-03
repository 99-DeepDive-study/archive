// ? Promise 에러처리

const log = (...target) => console.log(target);
import fetch from 'node-fetch';

const foo = async () => {
	try {
		const worngUrl = 'https://rwong.url';

		const response = await fetch(worngUrl);
		const data = await response.json();
		log(data);
	} catch (err) {
		log('error');
	}
};

foo();

// //! 내부에 try catch 문으로 에러처리를 하지 않으면 발생한 에러를 reject 하는 프로미스를 반환하기 때문에..
// //! .catch 후속 메서드도 사용 가능하다.
// const foo2 = async () => {
// 	const worngUrl = 'https://wrong.url';

// 	const response = await fetch(worngUrl);
// 	const data = await response.json();
// 	return data;
// };

// foo2().then(log('ok')).catch(log('error'));
