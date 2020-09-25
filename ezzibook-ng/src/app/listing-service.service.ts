import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import {Listing} from './Listing.model';
@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {
  readonly APIUrl = "http://localhost:5000/api/listing"

  constructor(private http: HttpClient) { }

  getProfileList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }
  getProfileListId(id):Observable<any[]>{
   return this.http.get<any>(this.APIUrl+'/'+id);
 
  }
  postProfile(val:any){
    return this.http.post(this.APIUrl,val);
  }
  updateProfile(val:any){
    return this.http.put(this.APIUrl,val);
  }
}
