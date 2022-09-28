import AppUi from './appUI';
import tasks from './tasks';

const addTasks = (container) => {
  const tasksList = tasks;
  document.addEventListener('DOMContentLoaded', () => {
    tasksList.forEach((task) => {
      AppUi.addTask(task, container);
    });
  });
};

export default addTasks;
