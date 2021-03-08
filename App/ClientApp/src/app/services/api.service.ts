import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserModel } from '../store/models/user.model';
import { catchError, map, mergeMap, reduce, switchMap, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ApiService {
  private readonly baseApiUrl = 'https://localhost:5001/api/'
  private readonly usersUrl = this.baseApiUrl + 'users';
  private readonly headers = { 'Content-Type': 'application/json'};

  constructor(private httpClient: HttpClient) {

  }

  public GetUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(this.usersUrl);
  }

  public AddUser(name: string): Observable<any> {
    return this.httpClient.get<UserModel[]>(this.usersUrl).pipe(
      map(users => users.map(user => user.userId).reduce((acc, c) => c > acc ? c : acc, 0)),
      mergeMap(id => this.httpClient.post<UserModel>(
        this.usersUrl,
        { id: id + 1, name: name },
        { headers: this.headers }
      )),
    );
  }

  public UpdateUser(user: UserModel): Observable<any> {
    const body = { userId: user.userId, userName: user.userName } as UserModel;

    return this.httpClient.request(
        'put',
        this.usersUrl + '/' + user.userId,
        { headers: this.headers, body: body }
    );
  }

  public DeleteUser(user: UserModel): Observable<any> {
    return this.httpClient.request(
        'delete',
        this.usersUrl + '/' + user.userId,
        { headers: this.headers }
    );
  }
}
