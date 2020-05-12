import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FromUserActions from './user.actions';
import { of } from 'rxjs';
import { UserService } from '../user.service';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromUserActions.loadUsers),
      mergeMap((action) =>
        this.userService.getUsers().pipe(
          map((users) => FromUserActions.loadUsersSuccess({ users })),
          catchError((error) => of(FromUserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
