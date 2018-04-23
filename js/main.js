import angular from "angular";
import mdcAutoInit from '@material/auto-init';

import {
  MDCComponent,
  MDCFoundation
} from '@material/base';

import { MDCRipple } from '@material/ripple';

import {
  MDCTextField,
  MDCTextFieldFoundation
} from '@material/textfield';

import { MDCCheckbox } from '@material/checkbox';

var path = window.location.pathname;
var page = path.split("/").pop();

if (page === "index.html") {
  const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
  const textarea = new MDCTextField(document.querySelector(".mdc-text-field"));
  const ripple = new MDCRipple(document.querySelector('.foo-button'));

  // Angular
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
}


import { MDCTabBar, MDCTabBarFoundation } from '@material/tabs';

const tabBar = new MDCTabBar(document.querySelector('.basic-tab-bar'));

import {MDCTabBarScroller, MDCTabBarScrollerFoundation} from '@material/tabs';

const tabBarScroller = new MDCTabBarScroller(document.querySelector('#tab-bar-scroller'));

// Dynamic tabs
var dynamicTabBar = new MDCTabBar(document.querySelector('#dynamic-tab-bar'));
var dots = document.querySelector('.dots');
var panels = document.querySelector('.panels');

dynamicTabBar.tabs.forEach(function (tab) {
  tab.preventDefaultOnClick = true;
});

function updateDot(index) {
  var activeDot = dots.querySelector('.dot.active');
  if (activeDot) {
    activeDot.classList.remove('active');
  }
  var newActiveDot = dots.querySelector('.dot:nth-child(' + (index + 1) + ')');
  if (newActiveDot) {
    newActiveDot.classList.add('active');
  }
}

function updatePanel(index) {
  var activePanel = panels.querySelector('.panel.active');
  if (activePanel) {
    activePanel.classList.remove('active');
  }
  var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
  if (newActivePanel) {
    newActivePanel.classList.add('active');
  }
}

dynamicTabBar.listen('MDCTabBar:change', function ({ detail: tabs }) {
  var nthChildIndex = tabs.activeTabIndex;

  updatePanel(nthChildIndex);
  updateDot(nthChildIndex);
});

dots.addEventListener('click', function (evt) {
  if (!evt.target.classList.contains('dot')) {
    return;
  }

  evt.preventDefault();

  var dotIndex = [].slice.call(dots.querySelectorAll('.dot')).indexOf(evt.target);

  if (dotIndex >= 0) {
    dynamicTabBar.activeTabIndex = dotIndex;
  }

  updatePanel(dotIndex);
  updateDot(dotIndex);
});