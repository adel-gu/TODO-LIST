import { createTask, deleteTask, loadTasks } from './modules/base';
import './style.css';

// Select DOM Elements
const form = document.forms[0];
const taskInput = form.task;
const todoList = document.querySelector('.todo_body_list');

createTask(taskInput, todoList, form);
deleteTask(todoList);
loadTasks(todoList);
