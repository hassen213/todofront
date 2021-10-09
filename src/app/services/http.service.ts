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

    public deleteTodoS(id:number):Observable<any>{
        return this.http.delete<Todo>(this.url+'delete/'+id);
    }

    public  findByIdS(id: number):Observable<any>{
        return this.http.get<any>(this.url+'findbyid/'+id);
    }
    public update(id: number, todo: Todo):Observable<any>{
        return this.http.put<Todo>(this.url+'update/'+id, todo);
    }
}
