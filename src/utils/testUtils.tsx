import React, { ReactElement } from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '@/store/reducers';

function render(
  ui: JSX.Element,
  { initialState, store = createStore(reducer, initialState), ...renderOptions }: any = {},
): RenderResult {
  function Wrapper({ children }: { children: ReactElement }): ReactElement {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
