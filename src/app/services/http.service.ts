import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../models/todo";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string='http://localhost:8083/todo/'

  constructor(private http:HttpClient) {}

    getListTodo(){return this.http.get("http://localhost:8083/todo/findall");}

    public addTodoFromRemote(todo: Todo): Observable<any> {
      return this.http.post<any>(this.url+'add', todo)
    }

    deleteTodo(){

    }

}
