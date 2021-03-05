import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUsers = createSelector(
  selectUserState,
  (state: fromUser.State) => state.users
);

export const selectUsersError = createSelector(
  selectUserState,
  (state: fromUser.State) => state.error
);

export const selectUIDisabled = createSelector(
  selectUserState,
  (state: fromUser.State) => state.uiDisabled
);