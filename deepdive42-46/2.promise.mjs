const BASE_URL = 'https://koreanjson.com/users';

let promise = new Promise((resolve, reject) => {
	$.get(BASE_URL, (response) => {
		resolve(response);
	});
});

// promise.then(
//     result => console.log(result),
// )

// const fullfilled = new Promise(resolve => resolve(1));
// console.log(fullfilled);

// ----------------------------------
//
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("에러 발생!")), 1000);
// });

// promise2.then(undefined, (e)=>alert(e));

// ----------------------------------

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("결과"), 2000)
// })
//     .finally(() => alert("프라미스가 준비되었습니다."))
//     .then(result => alert(result)); // <-- .then에서 result를 다룰 수 있음

// new Promise((resolve, reject) => {
//     throw new Error("에러 발생!");
// })
//     .finally(() => alert("프라미스가 준비되었습니다."))
//     .catch(err => alert(err)); // <-- .catch에서 에러 객체를 다룰 수 있음

new Promise((resolve, reject) => {
	setTimeout(() => reject('결과'), 2000);
})
	.finally(() => alert('프라미스가 준비되었습니다.'))
	.then((result) => alert(result));
