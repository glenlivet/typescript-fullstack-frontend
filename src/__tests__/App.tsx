import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

it("render hello world.", () => {
  const { container } = render(<App />);
  expect(container.textContent).toBe("Hello World!");
});
