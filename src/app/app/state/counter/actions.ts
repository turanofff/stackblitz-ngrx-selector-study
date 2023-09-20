import { createActionGroup, emptyProps } from '@ngrx/store';

export const counterActions = createActionGroup({
  source: 'counterFeautre',
  events: {
    init: emptyProps(),
    increase: emptyProps(),
    decrease: emptyProps(),
    toggleFlag: emptyProps(),
  },
});
