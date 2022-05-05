import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "@stores/rootReducer";
import { rootSaga } from "@stores/rootSaga";
import { render as rtlRender } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from "redux";



const sagaMiddleware = createSagaMiddleware();

export const testStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

interface TestWrapper {
    children: any;
}

function render(
  ui: any,
  {
    store = testStore,
    ...renderOptions
  } = {}
) {
  function Wrapper(props: TestWrapper) {
    return <Provider store={store}>{props?.children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }