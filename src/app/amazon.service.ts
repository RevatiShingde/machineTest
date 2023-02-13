import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from './user-table/user';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  baseurl = `https://zil-test.s3.us-east-1.amazonaws.com/json-data.json`;

  constructor(private _http: HttpClient) { }

  getAllData():Observable<Iuser[]>{
    return this._http.get<Iuser[]>(this.baseurl)
  }
}
