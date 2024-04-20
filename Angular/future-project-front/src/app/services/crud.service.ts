import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { CreateUser } from '../model/createUser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrlGetAll: string = "https://localhost:7226/api/Users/GetAllUsers";
  baseUrlCreate: string = "https://localhost:7226/api/Users/CreateUser";

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrlGetAll );
  }

   create(data: CreateUser): Observable<CreateUser> {
      return this.http.post<CreateUser>(this.baseUrlCreate, data)
   }
}
