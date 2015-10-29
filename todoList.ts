import {Component, NgFor} from 'angular2/angular2';
import {TodoService} from './todoService.ts';
import {TodoItemRenderer} from './todoItemRenderer.ts';

@Component({
  selector: 'todo-list',
  directives: [NgFor, TodoItemRenderer],
  template: `<div>
    <todo-item-renderer *ng-for="#todo of todoService.todos" [todo]="todo"></todo-item-renderer>
  </div>`
})
export class TodoList{
  constructor(
    public todoService:TodoService
  ){}
}