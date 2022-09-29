import Read from './read';

export default class Delete {
  // Delete from the UI
  static #fromUi = (task) => {
    task.remove();
  };

  // Delete from localStorage
  static #fromStorage = (task) => {
    const tasks = Read.getTasks().filter((toDoTask) => {
      if (toDoTask.index !== parseInt(task.getAttribute('data-index'))) {
        return task;
      }
    });
    Read.setTasks(tasks);
  };

  // Edit task index
  static #updateIndex() {
    const tasks = Read.getTasks();
    let counter = 1;
    tasks.forEach((task) => {
      task.index = counter;
      counter += 1;
    });

    Read.setTasks(tasks);
  }

  // get the elements , search for index, delete it.
  static task(task) {
    Delete.#fromStorage(task);
    Delete.#fromUi(task);
    Delete.#updateIndex();
  }
}
