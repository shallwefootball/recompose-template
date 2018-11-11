import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  test("render text", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toBe("We Could be");
  });
});
