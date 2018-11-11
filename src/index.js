import React from "react";
import ReactDOM from "react-dom";
import { from } from "rxjs";
import { setObservableConfig } from "recompose";
import App from "./App";

setObservableConfig({
  fromESObservable: from
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
