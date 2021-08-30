import { ActionObject, IAsyncActions, IInitialAsyncState } from './types';

export const handleAsyncReducers = <T>(
  state: IInitialAsyncState<T>,
  action: ActionObject,
  actions: IAsyncActions,
) => {
  switch (action.type) {
    case actions.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: action.payload as T,
        error: null,
      };
    case actions.FAILURE:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
