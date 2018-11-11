import React from "react";
import ReactDOM from "react-dom";
import { from } from "rxjs";
import { compose, setObservableConfig } from "recompose";
import { duration$, goal } from "./utils";
import eases from "eases";

setObservableConfig({
  fromESObservable: from
});

const App = () => {
  return (
    <div>
      <style jsx>{``}</style>
      <h1>We Could be</h1>
    </div>
  );
};

const _App = compose()(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<_App />, rootElement);
