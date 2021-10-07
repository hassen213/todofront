import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string='http://localhost:8083/todo'

  constructor(private http:HttpClient) {}

    public fetchAll():Observable<Todo[]>{

      return this.http.get<Todo[]>(this.url+'finall');
    }
  
}
