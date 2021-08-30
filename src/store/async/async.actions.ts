import { createActionCreator } from 'deox';
import { asyncTypes } from './constants';
import { AsyncTypeKeys, IAsyncActions, LowerAsyncTypeKeys } from './types';

export const createAsyncActions = (actionName: string) => {
  const actions = asyncTypes.reduce((acc, asyncType: AsyncTypeKeys) => {
    const type = `${actionName.toUpperCase()}_${asyncType}`;
    const lowerAsyncType = asyncType.toLowerCase() as LowerAsyncTypeKeys;

    acc[asyncType] = type;

    acc[lowerAsyncType] = createActionCreator(
      type,
      (resolve) => (payload: unknown) => resolve(payload),
    );

    return acc;
  }, {} as IAsyncActions);

  return actions;
};
