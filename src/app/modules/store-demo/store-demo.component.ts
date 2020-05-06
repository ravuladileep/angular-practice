import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../actions/counter.actions';

interface IappState {
  message: string;
}

@Component({
  selector: 'app-store-demo',
  templateUrl: './store-demo.component.html',
  styleUrls: ['./store-demo.component.css'],
})
export class StoreDemoComponent implements OnInit {
  message$: Observable<string>;
  count$: Observable<number>;

  constructor(private store: Store<IappState>, private store2: Store<{count: number}>) {
    this.message$ = this.store.select('message');
    this.count$ = store2.pipe(select('count'));
  }

  public spanishMessage(): void {
    this.store.dispatch({ type: 'SPANISH' });
  }
  public frenchMessage(): void {
    this.store.dispatch({ type: 'FRENCH' });
  }

  ngOnInit(): void {}
  // counter


  increment() {
    this.store2.dispatch(increment());
  }

  decrement() {
    this.store2.dispatch(decrement());
  }

  reset() {
    this.store2.dispatch(reset());
  }

}
