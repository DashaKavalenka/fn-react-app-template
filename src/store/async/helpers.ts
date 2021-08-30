import { IAsyncActions } from './types';

export const getAsyncActionList = (actions: IAsyncActions) => [
  actions.request,
  actions.success,
  actions.failure,
];
