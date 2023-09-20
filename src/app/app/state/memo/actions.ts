import { createActionGroup, emptyProps } from '@ngrx/store';
import { props } from '@ngrx/store';

export const memoActions = createActionGroup({
  source: 'memoFeature',
  events: {
    init: emptyProps(),
    setText: props<{ text: string }>(),
  },
});
