const log = (target) => console.log(target);

setTimeout(() => console.log(1), 0);

Promise.resolve()
	.then(() => log(2))
	.then(() => log(3));
