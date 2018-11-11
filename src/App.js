import React from "react";
import { compose, setObservableConfig } from "recompose";
import { duration$, goal } from "./utils";
import eases from "eases";

const App = () => {
  return (
    <div>
      <style jsx={true}>{``}</style>
      <h1>We Could be</h1>
    </div>
  );
};

export default compose()(App);
