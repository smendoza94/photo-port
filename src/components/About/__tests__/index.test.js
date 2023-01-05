import React from "react";
import About from "..";

// The Render function will allow Jest to create a simulated DOM in a Node.js environment
// to approximate the DOM (no component is actually visibly rendered).
// The Cleanup function is used to remove components from the DOM to prevent memory leaking,
// as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";
// jest-dom offers access to custom matchers that are used to test DOM elements.
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("About component", () => {
  // First test
  it("renders", () => {
    render(<About />);
  });

  // Second test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
