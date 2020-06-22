import { decorate, observable, computed, autorun } from "mobx";

class GS25 {
  basket = [];

  get total() {
    console.log("계산중 ...");
    // Reduce 함수로 배열 내부 객체의 price 총합 계산
    return this.basket.reduce((prev, curr) => prev + curr.price, 0);
  }

  select(name, price) {
    this.basket.push({ name, price });
  }
}

// decorate를 통해서 각 값에 MobX 함수 적용
decorate(GS25, {
  basket: observable,
  total: computed
});

const gs25 = new GS25();
autorun(() => gs25.total);

gs25.select("물", 800);
console.log(gs25.total);
gs25.select("물", 800);
console.log(gs25.total);
gs25.select("포카칩", 1500);
console.log(gs25.total);
