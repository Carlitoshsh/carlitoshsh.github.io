import angular from "angular";
import mdcAutoInit from '@material/auto-init';

import {
  MDCComponent,
  MDCFoundation
} from '@material/base';

import {MDCRipple} from '@material/ripple';

import {
  MDCToolbar,
  MDCToolbarFoundation
} from '@material/toolbar';


const ripple = new MDCRipple(document.querySelector('.foo-button'));
const toolbar = new MDCToolbar(document.querySelector(".mdc-toolbar"))
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

angular.module('todoApp', [])
  .controller('TodoListController', function () {

    var todoList = this;

    todoList.todos = [
      { text: 'Aprender AngularJS', done: true },
      { text: 'Usar Material Design for Components', done: true },
      { text: 'Construir una aplicación con AngularJS', done: false }
    ];

    todoList.addTodo = function () {
      todoList.todos.push({ text: todoList.todoText, done: false });
      todoList.todoText = '';
    };

    todoList.remaining = function () {
      var count = 0;
      angular.forEach(todoList.todos, function (todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function () {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function (todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });

