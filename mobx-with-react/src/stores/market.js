import { observable, action, computed } from "mobx";

export default class MarketSotre {
  @observable
  selectedItems = [];

  @action
  put = (name, price) => {
    // 존재하는지 확인
    const exists = this.selectedItems.find((item) => item.name === name);

    // 존재하지 않는아면 새로 집어넣는다
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }

    // 존재한다면 count 값만 올린다.
    exists.count++;
  };

  @action
  take = (name) => {
    const itemToTake = this.selectedItems.find((item) => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      // 갯수가 0이면
      this.selectedItems.remove(itemToTake); // 배열에서 제거 처리
    }
  };

  @computed
  get total() {
    console.log("총합 계산 ...");
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}
