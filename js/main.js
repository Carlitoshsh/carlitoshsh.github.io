import angular from "angular";
import mdcAutoInit from '@material/auto-init';

import {
  MDCComponent,
  MDCFoundation
} from '@material/base';

import {MDCRipple} from '@material/ripple';

import {
  MDCTextField,
  MDCTextFieldFoundation
} from '@material/textfield';

import {MDCCheckbox} from '@material/checkbox';

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));

const ripple = new MDCRipple(document.querySelector('.foo-button'));
const textarea = new MDCTextField(document.querySelector(".mdc-text-field"));

import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';

const tabBar = new MDCTabBar(document.querySelector('#basic-tab-bar'));

// For waterfall toolbar

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

