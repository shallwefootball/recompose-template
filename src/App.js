import React from "react";
import { mapPropsStream } from "recompose";
import { combineLatest } from "rxjs/operators";
import { map } from "rxjs/operators";
import eases from "eases";
import { animation$ } from "./utils";

const POS = 120;

const animation = {
  tv: POS,
  ms: 1200,
  easing: eases["elasticInOut"]
};

const App = props => {
  return (
    <div>
      <style jsx>{`
        div {
          transform: translate(-${props.x}px, 0);
        }
      `}</style>
      <p>
        <a
          href="https://kicker.shallwefootball.com/easing-sheet"
          target="_blank"
        >
          choose 👈{" "}
        </a>{" "}
        what you want function names
      </p>
    </div>
  );
};

export default mapPropsStream(props$ => {
  return props$.pipe(
    combineLatest(animation$(animation).pipe(map(x => POS - x)), (props, x) => {
      return { x };
    })
  );
})(App);
