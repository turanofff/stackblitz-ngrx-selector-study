import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';
import { counterActions } from './state/counter/actions';
import {
  selectCounterComibned,
  selectCounterCount,
  selectCounterFlag,
} from './state/counter/selectors';
import { memoActions } from './state/memo/actions';
import { selectMemoText } from './state/memo/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  count$: Observable<number>;
  flag$: Observable<boolean>;
  combo$: Observable<number | string>;
  memo$: Observable<string>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCounterCount);
    this.flag$ = this.store.select(selectCounterFlag);
    this.combo$ = this.store.select(selectCounterComibned);
    this.memo$ = this.store.select(selectMemoText);

    for (let i = 0; i <= 10; i++) {
      // Just to prove memoization
      firstValueFrom(this.store.select(selectCounterCount)).then(console.log);
    }
  }

  increase() {
    this.store.dispatch(counterActions.increase());
  }

  decrease() {
    this.store.dispatch(counterActions.decrease());
  }

  toggleFlag() {
    this.store.dispatch(counterActions.toggleFlag());
  }

  updateMemo() {
    const map = ['a', 'b', 'c'];
    const str = map.reduce(
      (acc) => (acc += map[Math.floor(Math.random() * map.length)]),
      ''
    );
    firstValueFrom(this.memo$).then((text) => {
      this.store.dispatch(memoActions.setText({ text: `${text}-${str}` }));
    });
  }
}
