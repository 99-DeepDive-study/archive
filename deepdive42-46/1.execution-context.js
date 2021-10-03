// Synchronous
function sleep(ms, func) {
	delay(ms);
	func();
}

function foo() {
	console.log('fooooo');
}

function bar() {
	console.log('barrrrrrr');
}

sleep(10000, foo);

bar();

// ---------------------------------

// Asynchronous

function foo() {
	console.log('fooooo');
}

function bar() {
	console.log('barrrrrrr');
}

setTimeout(foo, 10000);
bar();

// ---------------------------------
