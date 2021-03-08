import { Action, createReducer, on } from '@ngrx/store';
import { UserModel } from '../models/user.model';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  users: UserModel[];
  uiDisabled: boolean;
  error: any;
}

export const initialState: State = {
  users: [],
  uiDisabled: false,
  error: null
};

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => ({ ...state, users: action.users, uiDisabled: false })),
  on(UserActions.loadUsersFailure, (state, action) => ({ ...state, error: action.error }))

);

