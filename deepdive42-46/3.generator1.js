const log = (...target) => console.log(target);

//? 46.4 제너레이터의 일시 중지와 재개

function* getFunc() {
	yield 1;
	yield 2;
	yield 3;
}

// * 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
const generator = getFunc();

// log(generator.next()); // * yield 표현식까지 실행되고 일시중지, 이 때 함수의 제어권이 호출자로 양도됨
// log(generator.next()); // * 이 때 제너레이터 객체의 next 메서드는 value, done 프로퍼티를 갖는 iterator result 객체를 반환한다.
// log(generator.next()); // * 이터레이터의 next 메서드와 달리 [ 제너레이터 객체의 next 메서드에는 인수를 전달할 수 있다. ]

//***************************************************************************************************************************** */

//? 제너레이터 객체의 [ next 메서드에 전달한 인수 ]는 제너레이터 함수의 [ yield 표현식을 할당받는 변수에 할당 ]된다.

function* getFuntParam() {
	const x = yield +1;
	const y = yield x + 10;
	log(x, y);
	return x + y;
}

const generatorparms = getFuntParam();

log(generatorparms.next()); // * 처음 호출하는 next 메서드에는 인수를 전달하지 않는다. 만약 처음 호출하는 next 메서드에 인수를 전달하면 무시된다.
log(generatorparms.next(2)); // *  next 메서드에 인수로 전달한 2는 첫번째 yield 표현식을 할당받는 x 변수에 할당된다.  < x = 2 >
log(generatorparms.next(10)); // *	next 메서드에 인수로 전달한 10는 첫번째 yield 표현식을 할당받는 y 변수에 할당된다.  < y = 10 >

//! 함수 호출자는 next 메서드를 통해 yield 표현식까지 함수를 실행시켜 제너레이터 객체가 관리하는 상태 [ yield 된 값 ] 를 꺼내온다.
//! next 메서드에 인수를 전달해서 제너레이터 객체에 상태 [ yield 표현식을 할당받는 변수 ]를 밀어넣을 수 있다.
