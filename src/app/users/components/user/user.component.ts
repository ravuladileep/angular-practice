import { Component, OnInit } from '@angular/core';
import { UserState } from '../../store/user.reducer';
import { Store, select } from '@ngrx/store';
import * as FromUserActions from '../../store/user.actions';
import { selectUsers } from '../../store/user.selectors';
import { User } from '../../store/user.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
    this.store.dispatch(FromUserActions.loadUsers());
    this.users$ = this.store.pipe(select(selectUsers));
  }

}
