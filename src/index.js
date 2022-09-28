import { createTask, loadTasks } from './modules/base';
import './style.css';

const todoList = document.querySelector('.todo_body_list');
const form = document.forms[0];
const task = form.task;
console.log(task);
createTask(task, todoList, form);
loadTasks(todoList);
