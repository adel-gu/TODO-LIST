import Create from './utils/create';

const createTask = (task, container, form) => {
  // when addBtn pressed add task to UI and LocalStorage
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    Create.task(task.value, container);
    form.submit;
  });
};

export { createTask };
