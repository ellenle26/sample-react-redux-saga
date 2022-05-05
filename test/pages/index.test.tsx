/**
 * @jest-environment jsdom
*/

import {render} from "@testing-library/react";
import React from "react";

import Home from "../../src/pages/index";

test("snapshot testing", () => {
  const renderResult = render(<Home />);
  expect(renderResult.asFragment()).toMatchSnapshot();
});