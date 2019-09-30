import { Injectable } from '@angular/core';
import { User } from '../models/app.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login = async (user: any): Promise<any> => {
    return await this.http.post<any>(`${environment.host}/user/validate`,user).toPromise()
  }

  registerUser = async (user: User) => {
    return await this.http.post<any>(`${environment.host}/user`,user).toPromise()
  }
}
