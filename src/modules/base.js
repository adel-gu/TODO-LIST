import Create from './utils/create';
import Delete from './utils/delete';

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

const deleteTask = (container) => {
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      const deleteBtn = e.target;
      const task = container.querySelector(
        `li[data-index= "${deleteBtn.getAttribute('data-index')}"]`
      );
      Delete.task(task);
    }
  });
};

const loadTasks = (container) => {
  // when page loaded add tasks to UI.
  document.addEventListener('DOMContentLoaded', () => {
    Create.tasks(container);
  });
};

export { createTask, deleteTask, loadTasks };
