import {
  decorate,
  observable,
  computed,
  autorun,
  action,
  transaction // *** transaction 불러옴
} from "mobx";

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
  total: computed,
  select: action // **** 액션 명시
});

const gs25 = new GS25();
autorun(() => gs25.total);

// *** 새 데이터가 추가될 때 알림
autorun(() => {
  if (gs25.basket.length > 0) {
    console.log(gs25.basket[gs25.basket.length - 1]);
  }
});

transaction(() => {
  gs25.select("물", 800);
  gs25.select("물", 800);
  gs25.select("포카칩", 1500);
});

console.log(gs25.total);
