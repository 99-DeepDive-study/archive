import fetch from 'node-fetch';
const BASE_URL = 'https://koreanjson.com/users';

function getData(callbackFunc) {
	$.get(BASE_URL, function (response) {
		callbackFunc(response);
	});
}

getData(function (userData) {
	console.log(userData);
});

console.log('!!');
