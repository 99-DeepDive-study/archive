const log = (...target) => console.log(target);

import fetch from 'node-fetch';

const getUsers = async () => {
	const url = 'https://koreanjson.com/users';
	const res = await fetch(url); // * fetch 함수가 반환한 promise가 settled상태가 될 때까지 대기
	const users = await res.json(); // * 이후 settled 상태가 되면 프로미스가 resolve 한 처리 결과가 res 변수에 할당된다.
	log(users);
};

getUsers();

//! await 키워드는 다음 실행을 일시 중지시켰다가 프로미스가 settled 가 되면 다시 재개한다.
//! await 는 반드시 promise 앞에서 사용한다.
//! await 는 프로미스가 settled 가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환한다.
