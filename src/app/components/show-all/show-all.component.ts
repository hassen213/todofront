import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  constructor(private httpService:HttpService ) { }

  listOfTodos:Todo[];

  ngOnInit(): void {
  }

}
