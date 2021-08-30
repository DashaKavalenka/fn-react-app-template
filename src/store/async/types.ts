import { ExactActionCreator } from 'deox/dist/create-action-creator';

import { Nullable } from '@/types/common';
import { asyncTypes } from './constants';

export type AsyncTypeKeys = typeof asyncTypes[number];
export type LowerAsyncTypeKeys = Lowercase<AsyncTypeKeys>;

export type ActionObject = {
  type: string;
  payload?: unknown;
};

export type ActionFunc = (payload?: unknown) => ActionObject;

export type ActionCreator = ExactActionCreator<string, ActionFunc>;

export interface IAsyncActions
  extends Record<AsyncTypeKeys, string>,
    Record<LowerAsyncTypeKeys, ActionCreator> {}

export interface IInitialAsyncState<T> {
  isLoading: boolean;
  loaded: boolean;
  data: Nullable<T>;
  error: Nullable<unknown>;
}
