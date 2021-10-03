// ! 최소 6초
async function foo() {
	const a = await new Promise((resolove) =>
		setTimeout(() => resolove(1), 3000)
	);
	const b = await new Promise((resolove) =>
		setTimeout(() => resolove(2), 2000)
	);
	const c = await new Promise((resolove) =>
		setTimeout(() => resolove(3), 1000)
	);

	console.log([a, b, c]);
}

foo();

// **************************************************************

// ! 최소 3초
async function fooAll() {
	const res = await Promise.all([
		new Promise((resolove) => setTimeout(() => resolove(1), 3000)),
		new Promise((resolove) => setTimeout(() => resolove(2), 2000)),
		new Promise((resolove) => setTimeout(() => resolove(3), 1000)),
	]);
	console.log(res);
}

fooAll();
