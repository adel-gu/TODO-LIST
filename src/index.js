import * as base from './modules/base';
import './style.css';

// Select DOM Elements
const form = document.forms[0];
const taskInput = form.task;
const todoList = document.querySelector('.todo_body_list');

base.createTask(taskInput, todoList, form);
base.deleteTask(todoList);
base.editTask(todoList);
base.loadTasks(todoList);
