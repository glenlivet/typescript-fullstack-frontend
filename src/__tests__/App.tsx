import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

it("render hello world.", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("hello").textContent).toBe("Hello World!");
  expect(getByTestId("thumbs_up").textContent).toBe("Thumbs Up");
});
