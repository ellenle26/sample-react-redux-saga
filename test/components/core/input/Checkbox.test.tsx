/**
 * @jest-environment jsdom
*/

import Checkbox from "@components/core/input/Checkbox";
import { fireEvent, render } from "@testing-library/react";
import React from "react";

test("snapshot testing", () => {
    const renderResult = render(<Checkbox checked={false} />);
    expect(renderResult.asFragment()).toMatchSnapshot();
});

test("onchange", () => {
    const handleChange = jest.fn();
    const renderResult = render(<Checkbox checked={false} onChange={value => handleChange(value)} label="item"/>);

    fireEvent.click(renderResult.container.getElementsByTagName("input")[0]);
    expect(renderResult.container.getElementsByTagName("input")[0].checked).toBeTruthy();
    fireEvent.click(renderResult.container.getElementsByTagName("input")[0])
    expect(renderResult.container.getElementsByTagName("input")[0].checked).toBeFalsy()
})