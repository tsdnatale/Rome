import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from '../store/models/user.model';
import { loadUsers } from '../store/user/user.actions';
import { selectUsers } from '../store/user/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<UserModel[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());

    this.users$ = this.store.select(selectUsers);
  }

}
