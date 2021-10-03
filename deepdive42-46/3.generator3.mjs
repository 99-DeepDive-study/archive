const log = (...target) => console.log(target);
import fetch from 'node-fetch';
import co from 'co';

//? 46.5 제너레이터 실행기 -> co 라이브러리
co(function* fetchUsers() {
	const url = 'https://koreanjson.com/users';
	const response = yield fetch(url);
	const users = yield response.json();
	log(users);
});
