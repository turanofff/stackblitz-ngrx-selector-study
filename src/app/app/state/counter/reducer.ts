import { createFeature, createReducer, on } from '@ngrx/store';
import { counterActions } from './actions';
import { Counter } from './counter.model';

const initialState: Counter = {
  count: 0,
  flag: false,
};

export const counterReducer = createReducer(
  initialState,
  on(counterActions.init, () => ({ ...initialState })),
  on(counterActions.increase, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(counterActions.decrease, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(counterActions.toggleFlag, (state) => ({ ...state, flag: !state.flag }))
);

export const counterFeature = createFeature({
  name: 'counterFeature',
  reducer: counterReducer,
});
