/**
 * @jest-environment jsdom
*/


import Dialog from "@components/core/Dialog";
import { fireEvent, render } from "@testing-library/react";
import React from "react";

test("snapshot testing", () => {
    const renderResult = render(<Dialog opened={true} cancelText="Cancel" saveText="Save">Dialog content</Dialog>);
    expect(renderResult.asFragment()).toMatchSnapshot();
})

test("onCancel testing", () => {
    const handleCancel = jest.fn();
    const renderResult = render(<Dialog opened={true} cancelText="Cancel" saveText="Save" onClose={handleCancel}>Dialog content</Dialog>);
    const cancelBttn = renderResult.container.getElementsByTagName("button")[0];
    fireEvent.click(cancelBttn);
    expect(cancelBttn.innerHTML).toMatch("Cancel");
    expect(handleCancel).toHaveBeenCalledTimes(1);
})

test("onSave testing", () => {
    const handleSave = jest.fn();
    const renderResult = render(<Dialog opened={true} cancelText="Cancel" saveText="Save" onSave={handleSave
}>Dialog content</Dialog>);
    const saveBttn = renderResult.container.getElementsByTagName("button")[1];
    fireEvent.click(saveBttn);
    expect(saveBttn.innerHTML).toMatch("Save");
    expect(handleSave).toHaveBeenCalledTimes(1);
})