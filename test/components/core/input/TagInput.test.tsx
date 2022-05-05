/**
 * @jest-environment jsdom
*/

import TagInput from "@components/core/input/TagInput";
import { fireEvent, render } from "@testing-library/react";
import React from "react";


const values = ["a", "b", "c", "d"];
const add = jest.fn();
const remove = jest.fn();

test("snapshot testing", () => {
    const renderResult = render(<TagInput  values={values} onAddTag={add} onRemoveTag={remove}/>);
    expect(renderResult.asFragment()).toMatchSnapshot();
});

test("render items testing", () => {
    const renderResult = render(<TagInput values={values} onAddTag={add} onRemoveTag={remove}/>);
    expect(renderResult.container.children[0].children.length).toEqual(1);
    // expect 4 tags and 1 input
    expect(renderResult.container.children[0].children[0].children.length).toEqual(5);
});

test("remove tag testing", () => {
    const renderResult = render(<TagInput values={values} onAddTag={add} onRemoveTag={remove}/>);
    const tags = renderResult.container.getElementsByClassName("min-w-fit flex items-center mr-2 mb-2 bg-white border border-tag rounded-2xl px-2 py-1")
    fireEvent.click(tags[0].getElementsByTagName("img")[0]);
    expect(remove).toHaveBeenCalledTimes(1);
});


test("add tag testing", () => {
    const renderResult = render(<TagInput values={values} onAddTag={add} onRemoveTag={remove}/>);
    const input = renderResult.container.getElementsByTagName("input")[0];
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(add).toHaveBeenCalledTimes(1);
})

test("add empty tag testing", () => {
    const renderResult = render(<TagInput values={values} onAddTag={add} onRemoveTag={remove} />);
    const input = renderResult.container.getElementsByTagName("input")[0];
    fireEvent.change(input, { target: { value: " " } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(add).toHaveBeenCalledTimes(1);
})

test("different key down testing", () => {
    const renderResult = render(<TagInput values={values} onAddTag={add} onRemoveTag={remove} />);
    const input = renderResult.container.getElementsByTagName("input")[0];
    fireEvent.change(input, { target: { value: " " } });
    fireEvent.keyDown(input, { key: "Shift" });
    expect(add).toHaveBeenCalledTimes(1);
})

test('err and required testing', () => {
    const renderResult = render(<TagInput values={values} onAddTag={add} onRemoveTag={remove} error="error" required title="test"/>);
    const ptag = renderResult.container.getElementsByClassName("text-xs mt-1 text-error")[0];
    expect(ptag).toBeTruthy();
})