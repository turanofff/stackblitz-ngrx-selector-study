import { createSelector } from '@ngrx/store';
import { counterFeature } from './reducer';

export const selectCounterCount = createSelector(
  counterFeature.selectCount,
  (state) => {
    console.log('counter count selector executed');
    return state;
  }
);

export const selectCounterFlag = createSelector(
  counterFeature.selectFlag,
  (state) => {
    console.log('counter flag selector executed');
    return state;
  }
);

export const selectCounterComibned = createSelector(
  selectCounterCount,
  selectCounterFlag,
  (count, flag) => {
    console.log('counter combined selector executed');
    return flag ? count : 'n/a';
  }
);
