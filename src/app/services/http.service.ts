import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string='http://localhost:8083/todo/'

  constructor(private http:HttpClient) {}

    // public fetchAll():Observable<Todo[]>{
    //   return this.http.get<Todo[]>(this.url+'findall');}

    // la methode getListTodo() a pour but de recuperer les donnees de la partie backend via l'url "http://localhost:8083/todo/findall"
    getListTodo(){return this.http.get("http://localhost:8083/todo/findall");}

}
