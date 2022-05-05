/**
 * @jest-environment jsdom
*/

import RadioGroup from "@components/core/input/RadioGroup";
import { fireEvent, render } from "@testing-library/react";
import React from "react";

test('screenshot testing', () => {
    const renderResult = render(<RadioGroup options={["a", "b", "c", "d"]} value="a"/>);
    expect(renderResult.asFragment()).toMatchSnapshot()
})

test('render items testing', () => {
    const renderResult = render(<RadioGroup options={["a", "b", "c", "d"]} value="a" title="test"/>);

    expect(renderResult.container.children[0].children.length).toEqual(2);
    expect(renderResult.container.children[0].children[1].children.length).toEqual(4);
})

test('onchange testing', () => {
    const handleChange = jest.fn();
    const renderResult = render(<RadioGroup options={["a", "b", "c", "d"]} value="a" title="test" onChange={val => handleChange(val)}/>);
    const selectedRadio = renderResult.getByLabelText('c');
    const unselectedRadio = renderResult.getByLabelText('a');
    fireEvent.click(selectedRadio);

    expect(unselectedRadio.ariaChecked).toBeFalsy();
})

test('render items 2 testing', () => {
    const renderResult = render(<RadioGroup options={["a", "b", "c", "d"]} value="a" title="test" required horizontalDisplay />);

    expect(renderResult.container.children[0].children.length).toEqual(2);
    expect(renderResult.container.children[0].children[1].children.length).toEqual(4);
})