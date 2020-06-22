import { observable, action } from "mobx";

export default class CounterStore {
  @observable
  number = 1; // *** 기본값 1로 수정

  constructor(root) {
    this.root = root;
  }

  @action
  increase = () => {
    this.number++;
  };

  @action
  decrease = () => {
    this.number--;
  };
}
