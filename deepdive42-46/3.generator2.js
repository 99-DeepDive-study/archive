const log = (...target) => console.log(target);

function* odds1() {
	yield 1;
	yield 3;
	yield 5;
}

let iter1 = odds1();
log(iter1.next()); //1
log(iter1.next()); // 3
log(iter1.next()); //5

//***************************************************************************************************************************** */

function* odds2(l) {
	for (let i = 0; i < l; i++) {
		if (i % 2) yield i;
	}
}

let iter2 = odds2(10);
log(iter2.next()); // 1
log(iter2.next()); // 3
log(iter2.next()); // 5

//***************************************************************************************************************************** */

function* infinity(i = 0) {
	while (true) yield i++;
}

function* odds3(l) {
	for (const i of infinity(1)) {
		if (i % 2) yield i;
		if (i === l) return;
	}
}

let iter3 = odds3(30);
log(iter3.next());
log(iter3.next());
log(iter3.next());
