import { createSelector } from '@ngrx/store';
import { memoFeature } from './reducer';

export const selectMemoText = createSelector(
  memoFeature.selectText,
  (state) => {
    console.log('memo selector executed');
    return state;
  }
);
