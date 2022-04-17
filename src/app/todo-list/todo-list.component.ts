import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { TodoListItemModel, TodoListItemStatus } from './models/todo-list-item-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  // items = [
  //   new TodoListItemModel("New", TodoListItemStatus.InProgress),
  //   new TodoListItemModel("ITEM 2 TO TEST ASD ASD", TodoListItemStatus.InProgress),
  //   new TodoListItemModel("New2", TodoListItemStatus.InProgress),
  //   new TodoListItemModel("COMPLETED1", TodoListItemStatus.Completed),
  //   new TodoListItemModel("COMPLETED22", TodoListItemStatus.Completed),
  //   new TodoListItemModel("Removed", TodoListItemStatus.Removed),
  // ]
  todos!: DocumentChangeAction<TodoListItemModel>[];
  
  currentView: TodoListItemStatus = TodoListItemStatus.InProgress;
  collectionId!: string;

  constructor(private store: AngularFirestore) {
   }

  randomString(length: number) : string {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  ngOnInit(): void {
    let userId = localStorage.getItem("todos-user-id");
    if(userId == null){
      userId = this.randomString(10);
      localStorage.setItem('todos-user-id', userId);
    }
    this.collectionId = 'todos-' + userId;
    console.log(this.collectionId);
    var firestore_items = this.store.collection<TodoListItemModel>(this.collectionId)
      .snapshotChanges()
      .subscribe(res=>this.todos = res);
  }

  onDelete(id: string) {
    if (this.currentView != TodoListItemStatus.Removed) {
      this.store.collection(this.collectionId).doc(id).update({Status: TodoListItemStatus.Removed});
    }
    else {
      // this.items.splice(id,1);
      this.store.collection(this.collectionId).doc(id).delete();
    }
  }
  onChange(id: string, checked: boolean) {
    if(this.currentView == TodoListItemStatus.Removed){
      // this.items[id].Status = TodoListItemStatus.InProgress;
      this.store.collection(this.collectionId).doc(id).update({Status: TodoListItemStatus.InProgress});
    }else{
      this.store.collection(this.collectionId).doc(id)
        .update({Status: checked ? TodoListItemStatus.Completed : TodoListItemStatus.InProgress});
      // this.items[id].Status = checked ? TodoListItemStatus.Completed : TodoListItemStatus.InProgress;
    }
  }
  onViewChange(id: number) {
    this.currentView = <TodoListItemStatus>id;
  }

  onCreateNew() {
    const item_name = prompt("Enter new item name");
    if(item_name!=null){
      const item = new TodoListItemModel(item_name, TodoListItemStatus.InProgress)
      this.store.collection(this.collectionId).add({...item});
      // this.items.push(item));
    }
  }
}
