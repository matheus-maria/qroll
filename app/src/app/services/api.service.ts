import { Injectable } from '@angular/core';
import { User, Class } from '../models/app.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public user: User

  login = async (user: any): Promise<any> => {
    let value = await this.http.post<any>(`${environment.host}/user/validate`,user).toPromise()

    if(value != null)
      this.user = value

    return value
  }

  registerUser = async (user: User): Promise<any> => {
    return await this.http.post<any>(`${environment.host}/user`,user).toPromise()
  }

  getClasses = async (): Promise<any> => {

    let values = await this.http.get<Class[]>(`${environment.host}/class/${this.user._id}`).toPromise()
    return values.map( x => Object.assign(new Class, x))
  }
}
