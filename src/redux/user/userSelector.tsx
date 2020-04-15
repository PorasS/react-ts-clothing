import { createSelector } from 'reselect';

//state is actually a rootReducer which provides us we the state object
const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currerntUser
);


