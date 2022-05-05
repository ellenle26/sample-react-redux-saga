/**
 * @jest-environment jsdom
*/

import Button from "@components/core/Button";
import {fireEvent, render} from "@testing-library/react";
import React from "react";

test("snapshot testing", () => {
  const renderResult = render(<Button />);
  expect(renderResult.asFragment()).toMatchSnapshot();
});

test("having text testing", () => {
    const renderResult = render(<Button text="button" />);
    expect(renderResult.container.innerHTML).toMatch("button");
});

test("click testing", () => {
    const handleClick = jest.fn();
    const renderResult = render(<Button onClick={handleClick} />);
    fireEvent.click(renderResult.container.getElementsByTagName("button")[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
});