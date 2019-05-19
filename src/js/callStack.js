//리스트가 존재하고 함수는 리스트에 추가된다.
//실행이 완료되면 함수는 리스트에서 제거된다.

function  three() {
    console.log('@@callStack');
    throw Error ("오마이갓");

}

function two() {
    three();
}

function one() {
    two();
}

function zero() {
    one();
}

zero();