import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'eat dinner',
      completed: false,
    },
    {
      task: 'worked out',
      completed: false,
    },
    {
      task: 'wake up',
      completed: true,
    },
  ];

  listSearchTerm: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTask = (form: NgForm): void => {
    let newForm: Todo = {
      task: form.value.addTask,
      completed: form.value.completed === 'true' ? true : false,
    };
    this.todos.push(newForm);
    form.reset();
  };

  removeTask = (type: string, index: number): void => {
    if (type === 'item') {
      this.todos.splice(index, 1);
    }
  };

  filterList = (): Todo[] => {
    if (!this.listSearchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentSearch = todo.task.toLowerCase().trim();
        return currentSearch.includes(this.listSearchTerm.toLowerCase().trim());
      });
    }
  };

  setListSearchTerm = (form: NgForm): void => {
    this.listSearchTerm = form.value.searchList;
  };

  completeTask = (todo: Todo): void => {
    todo.completed = true;
  };
}
