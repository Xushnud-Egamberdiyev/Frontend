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
  baseUrlgetbyid: string =  "https://localhost:7226/api/Users/UserGetById?id=";
  baseUrlupdate: string = "https://localhost:7226/api/Users/UpdateUser?id=";
  baseUrldelete: string = "https://localhost:7226/api/Users/DeleteUserById?id=";
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrlGetAll );
  }

  create(data: CreateUser): Observable<CreateUser> {
     return this.http.post<CreateUser>(this.baseUrlCreate, data)
  }

  getbyid(id: number): Observable<CreateUser> {
   return this.http.get<CreateUser>(this.baseUrlgetbyid + id)
  }

  update(id: number, data: CreateUser): Observable<CreateUser> {
    return this.http.put<CreateUser>(this.baseUrlupdate + id, data)
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrldelete + id)
  }
}
