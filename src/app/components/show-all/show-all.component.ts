import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  //creation d'un object de HttpService
  constructor(private httpService:HttpService ) { }

  //on declar cette variable pour stocker la list la dans
  todo : any;

  //ng onInit il est executer automatiquement lorsque show-all.component.html est executer
  ngOnInit(): void {
    // this.httpService.fetchAll().subscribe(todo =>this.listOfTodos=todo);
    this.getListTodoFromService();

  }

  // la methode getListTodoFromService a pour but de recuperer les donnees qui sont requiperer par la methode getListTodo qui est dans http.service.ts
  getListTodoFromService(){
    this.httpService.getListTodo().subscribe(data => {this.todo = data;});
  }

}
