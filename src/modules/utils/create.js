import Read from './read';

export default class Create {
  // Check for cheked task
  static #checkedtask = (completed) => {
    if (completed) {
      return 'checked';
    }
    return '';
  };

  // add task to UI
  static #taskToUi = (task, container) => {
    const taskTemplate = `
    <li class="list_todo-item flex justify-between align-center border p" data-index="${
      task.index
    }">
      <div>
        <input type="checkbox" name="completed" id="completed" ${Create.#checkedtask(
          task.completed
        )}/>
        <span class="description ms ${Create.#checkedtask(task.completed)}">
          ${task.description}
        </span>
      </div>
      <div class="item-icons flex align-center">
        <button class="btn drag" data-index="${task.index}">
          &#x22EE;
        </button>
        <button class="btn delete-btn hide" data-index="${task.index}">
          &#x1F5D1;
        </button>
      </div>
    </li>
  `;

    container.innerHTML += taskTemplate;
  };

  // add task to localStorage
  static #taskToStorage = (task) => {
    const tasks = Read.getTasks();
    tasks.push(task);
    Read.setTasks(tasks);
  };

  // create a task
  static task = (taskDescription, container) => {
    const task = {
      description: taskDescription,
      completed: false,
      index: Read.getTasks().length + 1,
    };

    Create.#taskToUi(task, container);
    Create.#taskToStorage(task);
  };

  // Create tasks when page is loaded
  static tasks = (container) => {
    const tasks = Read.getTasks();
    tasks.forEach((task) => {
      Create.#taskToUi(task, container);
    });
  };
}
