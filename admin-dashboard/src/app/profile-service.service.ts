import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  readonly APIUrl = "http://localhost:3000/product"

  constructor(private http: HttpClient) { }

  getProfileList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }
  postProfile(val:any){
    return this.http.post(this.APIUrl,val);
  }
  updateProfile(val:any){
    return this.http.put(this.APIUrl,val);
  }
}
