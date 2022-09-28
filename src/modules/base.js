import Create from './utils/create';

// Clear flieds
const formClear = (task) => {
  task.value = '';
};

const createTask = (task, container, form) => {
  // when addBtn pressed add task to UI and LocalStorage.
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    Create.task(task.value, container);
    formClear(task);
  });
};

const loadTasks = (container) => {
  // when page loaded add tasks to UI.
  document.addEventListener('DOMContentLoaded', () => {
    Create.tasks(container);
  });
};

export { createTask, loadTasks };
