import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal currentPhoto={currentPhoto} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click event", () => {
  it("calls onClose handler", () => {
    // arrange: render modal
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    // act: simulate click event
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText("Close this modal"));
    // assert: expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
