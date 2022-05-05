/**
 * @jest-environment jsdom
*/

import TextArea from "@components/core/TextArea";
import {fireEvent, render} from "@testing-library/react";
import React from "react";

test("snapshot testing", () => {
  const renderResult = render(<TextArea />);
  expect(renderResult.asFragment()).toMatchSnapshot();
});

test("title testing", () => {
    const renderResult = render(<TextArea title="Title" />);
    const pTags = renderResult.container.getElementsByTagName("p");
    expect(pTags.length).toEqual(1);
    expect(pTags[0].innerHTML).toMatch("Title");
});

test("full width testing", () => {
    const renderResult = render(<TextArea title="Title" fullWidth = {true} />);
    const textAreaTags = renderResult.container.getElementsByTagName("textarea");
    expect(textAreaTags[0].className).toContain("w-full");
});

test("rows testing", () => {
    const renderResult = render(<TextArea title="Title" rows={50} />);
    const textAreaTags = renderResult.container.getElementsByTagName("textarea");
    expect(textAreaTags[0].rows).toEqual(50);
});

test("change event testing", () => {
    const handleChange = jest.fn();
    const renderResult = render(<TextArea onChange={value => handleChange(value)} />);
    const textAreaTags = renderResult.container.getElementsByTagName("textarea");
    fireEvent.change(textAreaTags[0], {target: {value: "this is text"}});

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toBeCalledWith("this is text");
  });