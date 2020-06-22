import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react"; // MobX에서 사용하는 Provider
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CounterStore from "./stores/counter";

const counter = new CounterStore(); // 스토어 인스턴스 생성

ReactDOM.render(
  <React.StrictMode>
    <Provider counter={counter}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
