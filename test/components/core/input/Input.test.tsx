/**
 * @jest-environment jsdom
*/

import Input from "@components/core/input/Input";
import { fireEvent, render } from "@testing-library/react";
import React from "react";

test("snapshot testing", () => {
    const renderResult = render(<Input />);
    expect(renderResult.asFragment()).toMatchSnapshot();
});

test("change event testing", () => {
    const handleChange = jest.fn();
    const renderResult = render(<Input onChange={value => handleChange(value)} required title="title" error="error"/>);
    const inputTags = renderResult.container.getElementsByTagName("input");
    fireEvent.change(inputTags[0], { target: { value: "this is text" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toBeCalledWith("this is text");
});

test('disabled testing', () => {
    const handleChange = jest.fn();
    const renderResult = render(<Input onChange={value => handleChange(value)} disabled error="error" />);
    const inputTags = renderResult.container.getElementsByTagName("input");
    expect(inputTags).toBeTruthy();
})