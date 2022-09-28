export default class Read {
  // Get data from local storage
  static getTasks = () => {
    let tasks = [];
    if (localStorage.getItem('Tasks')) {
      tasks = JSON.parse(localStorage.getItem('Tasks'));
    }

    return tasks;
  };

  static setTasks = (tasks) => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  };
}
