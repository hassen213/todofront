import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Todo} from "../../models/todo";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  constructor(private httpService:HttpService, private fb:FormBuilder) { }
  todo : any;
  to = new Todo();
  show=false;

  ngOnInit(): void {
    this.getListTodoFromService();

  }

  getListTodoFromService(){
    this.httpService.getListTodo().subscribe(data => {this.todo = data;});
  }

  addTodo() {
    this.httpService.addTodoFromRemote(this.to).subscribe(
      data => {console.log("responce received")},
      error => {console.log("exception occured")})
    this.ngOnInit();
  }
  showaddTodo(){
    this.show= !this.show;
  }

  deleteTodo(id: number) {
    this.httpService.deleteTodoS(id).subscribe(
      data => {console.log("responce received")},
      error => {console.log("exception occured")}
    )
    this.ngOnInit();
  }

  findById(id:number){
    this.httpService.findByIdS(id).subscribe(
      data => {console.log("responce received")},
      error => {console.log("exception occured")}
    )
  }
}
