import {bootstrap, Component} from 'angular2/angular2';
import {TodoInput} from './todoInput.ts';
import {TodoService} from '/todoService.ts';
import {TodoList} from '/todoList.ts';

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList],
  template: `<div>
    <todo-input></todo-input>
    <todo-list></todo-list>
    </div>`
})
class App{}

bootstrap(App, [TodoService]);