import { Component, OnInit } from '@angular/core';
import { TodoListItemModel, TodoListItemStatus } from './models/todo-list-item-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  items = [
    new TodoListItemModel("New",TodoListItemStatus.InProgress),
    new TodoListItemModel("ITEM 2 TO TEST ASD ASD",TodoListItemStatus.InProgress),
    new TodoListItemModel("New2",TodoListItemStatus.InProgress),
    new TodoListItemModel("COMPLETED1",TodoListItemStatus.Completed),
    new TodoListItemModel("COMPLETED22",TodoListItemStatus.Completed),
    new TodoListItemModel("Removed",TodoListItemStatus.Removed),
  ]
  currentView: TodoListItemStatus = TodoListItemStatus.InProgress;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number){
    this.items[id].Status = TodoListItemStatus.Removed;
  }
  onChange(id: number, checked: boolean){
    this.items[id].Status = checked ? TodoListItemStatus.Completed : TodoListItemStatus.InProgress;
  }
  onViewChange(id: number){
    this.currentView = <TodoListItemStatus>id;
  }
}
