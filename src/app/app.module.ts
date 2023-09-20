import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { counterFeature } from './app/state/counter/reducer';
import { memoFeature } from './app/state/memo/reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(),
    StoreModule.forFeature(counterFeature),
    StoreModule.forFeature(memoFeature),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
