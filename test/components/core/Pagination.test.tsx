/**
 * @jest-environment jsdom
*/

import Pagination from "@components/core/Pagination";
import React from "react";

import { fireEvent,render } from "../../test-utils";


test("snapshot testing", () => {
  const paginationItems = [1, 2, "...", 6, 7];
  const renderResult = render(<Pagination total={7} activedPage ={0} paginationItems = {paginationItems} />);
  expect(renderResult.asFragment()).toMatchSnapshot();
});


test("left arrow cannot be clicked testing", () => {
  const handleClick = jest.fn();
  const paginationItems = [1, 2, "...", 6, 7];
  const renderResult = render(<Pagination total={7} activedPage ={0} paginationItems = {paginationItems} onPageChange = {handleClick} />);
  expect(renderResult.container.children.length).toEqual(1);
  expect(renderResult.container.children[0].children.length).toEqual(7);
  fireEvent.click(renderResult.container.children[0].children[0]);
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test("click on normal item testing", () => {
  const handleClick = jest.fn();
  const paginationItems = [1, 2, "...", 6, 7];
  const renderResult = render(<Pagination total={7} activedPage ={0} paginationItems = {paginationItems} onPageChange = {handleClick} />);
  expect(renderResult.container.children.length).toEqual(1);
  expect(renderResult.container.children[0].children.length).toEqual(7);
  fireEvent.click(renderResult.container.children[0].children[1]);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("click on ... item testing", () => {
  const handleClick = jest.fn();
  const paginationItems = [1, 2, "...", 6, 7];
  const renderResult = render(<Pagination total={7} activedPage ={0} paginationItems = {paginationItems} onPageChange = {handleClick} />);
  expect(renderResult.container.children.length).toEqual(1);
  expect(renderResult.container.children[0].children.length).toEqual(7);
  fireEvent.click(renderResult.container.children[0].children[3]);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("right arrow cannot be clicked testing", () => {
  const handleClick = jest.fn();
  const paginationItems = [1, 2, "...", 6, 7];
  const renderResult = render(<Pagination total={7} activedPage ={6} paginationItems = {paginationItems} onPageChange = {handleClick} />);
  expect(renderResult.container.children.length).toEqual(1);
  expect(renderResult.container.children[0].children.length).toEqual(7);
  fireEvent.click(renderResult.container.children[0].children[6]);
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test("left arrow cannot be clicked testing", () => {
  const handleClick = jest.fn();
  const paginationItems = [1, 2, "...", 6, 7];
  const renderResult = render(<Pagination total={7} activedPage ={1} paginationItems = {paginationItems} onPageChange = {handleClick} />);
  expect(renderResult.container.children.length).toEqual(1);
  expect(renderResult.container.children[0].children.length).toEqual(7);
  fireEvent.click(renderResult.container.children[0].children[0]);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("right arrow can be clicked testing", () => {
  const handleClick = jest.fn();
  const paginationItems = [1, 2, "...", 6, 7];
  const renderResult = render(<Pagination total={7} activedPage ={5} paginationItems = {paginationItems} onPageChange = {handleClick} />);
  expect(renderResult.container.children.length).toEqual(1);
  expect(renderResult.container.children[0].children.length).toEqual(7);
  fireEvent.click(renderResult.container.children[0].children[6]);
  expect(handleClick).toHaveBeenCalledTimes(1);
});