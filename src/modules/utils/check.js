import Read from './read';

export default class Check {
  // Check the task on the Ui
  static #forUi = (check, taskDes) => {
    if (check) {
      taskDes.classList.add('checked');
    } else {
      taskDes.classList.remove('checked');
    }
  };

  // check the task on the local storage
  static #forStorage = (task, check) => {
    let tasks = Read.getTasks();
    tasks.forEach((toDoTask) => {
      if (toDoTask.index === parseInt(task.getAttribute('data-index'), 10)) {
        toDoTask.completed = check;
      }
    });
    Read.setTasks(tasks);
  };

  static task = (task, check, taskDes) => {
    Check.#forUi(check, taskDes);
    Check.#forStorage(task, check);
  };
}
