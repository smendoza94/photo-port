import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockCurrentSelected = jest.fn();
const mockSetCurrentSelected = jest.fn();

afterEach(cleanup);

describe("Nav component", () => {
  //baseline test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockCurrentSelected}
        setContactSelected={mockSetCurrentSelected}
      />
    );
  });
  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockCurrentSelected}
        setContactSelected={mockSetCurrentSelected}
      />
    );
    // assert value camparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // arrange
    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockCurrentSelected}
        setContactSelected={mockSetCurrentSelected}
      />
    );
    // assert
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visible", () => {
  it("inserts text into the links", () => {
    // arrange
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockCurrentSelected}
        setContactSelected={mockSetCurrentSelected}
      />
    );
    // assert
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("about")).toHaveTextContent("About Me");
  });
});
