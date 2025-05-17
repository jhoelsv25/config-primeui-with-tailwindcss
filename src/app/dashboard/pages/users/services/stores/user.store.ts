import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { UserService } from '../api/user.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { PageEvent, Pagination } from '@core/models/interfaces/layout.interface';
import { User, UserData } from '../../models/user.interface';

interface BookState {
  users: User[];
  selectedUser: User | null;
  selectedUsers: User[];
  loading: boolean;
  pagination: Pagination;
  query: string;
}

const initialState: BookState = {
  users: [],
  selectedUser: null,
  selectedUsers: [],
  loading: false,
  pagination: { skip: 1, limit: 10, total: 0 },
  query: '',
};

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, userService = inject(UserService)) => ({
    loadUsers: rxMethod<{
      query?: string;
      pagination?: PageEvent;
    } | void>(
      pipe(
        switchMap((params) => {
          const { query, pagination } = params || {};
          let request$ = userService.getUsers();
          if (query) request$ = userService.getByQuery(query);
          if (pagination)
            request$ = userService.getUserByPagination(pagination.limit, pagination.skip);
          return request$.pipe(
            tapResponse({
              next: (data: UserData) =>
                patchState(store, {
                  users: data.users,
                  pagination: {
                    limit: data.limit,
                    skip: data.skip,
                    total: data.total,
                  },
                }),
              error: (error) => console.error(error),
            })
          );
        })
      )
    ),
    removeUser: rxMethod<string>(
      pipe(
        switchMap((id) =>
          userService.removeUser(String(id)).pipe(
            tapResponse(
              (message) => console.log(message),
              (error) => console.error(error)
            )
          )
        )
      )
    ),
    getUserById: rxMethod<User>(
      pipe(
        switchMap((id) =>
          userService.getUserById(String(id)).pipe(
            tapResponse(
              (data) => patchState(store, { selectedUser: data }),
              (error) => console.error(error)
            )
          )
        )
      )
    ),
    setSelectedUser: (user: User) => {
      patchState(store, { selectedUser: user });
    },
    setSelectedUsers: (users: User[]) => {
      console.log(users);
      patchState(store, { selectedUsers: users });
    },
    setQuery: (query: string) => {
      patchState(store, { query });
    },
  })),
  withHooks({
    onInit({ loadUsers }) {
      loadUsers();
    },
  })
);
