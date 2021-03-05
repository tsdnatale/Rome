import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as UserActions from './user.actions';
import { ApiService } from '../services/api.service';



@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {
  }

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      tap(() => console.log('effect called', UserActions.loadUsers.type)),
      switchMap(() =>
        this.apiService.GetUsers().pipe(
          map(response => UserActions.loadUsersSuccess({ users: response })),
          catchError(error => of(UserActions.loadUsersFailure({ error }))))
      )
    );
  });
}
