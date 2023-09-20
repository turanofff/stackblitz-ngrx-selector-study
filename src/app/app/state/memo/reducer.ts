import { createFeature, createReducer, on } from '@ngrx/store';
import { memoActions } from './actions';
import { Memo } from './memo.model';

const initialState: Memo = {
  text: 'abc',
};

export const memoReducer = createReducer(
  initialState,
  on(memoActions.init, () => ({ ...initialState })),
  on(memoActions.setText, (state, { text }) => ({
    ...state,
    text,
  }))
);

export const memoFeature = createFeature({
  name: 'memoFeature',
  reducer: memoReducer,
});
