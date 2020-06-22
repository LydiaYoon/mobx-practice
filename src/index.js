import { observable, reaction, computed, autorun } from "mobx";

// **** Observable State 만들기
const calculator = observable({
  a: 1,
  b: 2
});

// **** computed로 특정 값 캐싱
const sum = computed(() => {
  console.log("계산중 ... ");
  return calculator.a + calculator.b;
});

// **** autorun은 함수 내에서 조회하는 값을 자동으로 주시함
autorun(() => console.log(`a 값이 ${calculator.a}로 바뀌었네요!`));
autorun(() => console.log(`b 값이 ${calculator.b}로 바뀌었네요!`));
autorun(() => sum.get());

calculator.a = 10;
calculator.b = 20;

// 여러 번 조회해도 computed 안의 함수를 다시 호출하지 않지만..
console.log(sum.value);
console.log(sum.value);

// 내부의 값이 바뀌면 다시 호출함
calculator.a = 20;
console.log(sum.value);
