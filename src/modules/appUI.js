export default class AppUi {
  static #checkedtask = (completed) => {
    if (completed) {
      return 'checked';
    }
  };

  static addTask = (task, container) => {
    const taskTemplate = `
      <li class="list_todo-item flex justify-between align-center border p">
        <div>
          <input type="checkbox" name="completed" id="completed" ${AppUi.#checkedtask(
            task.completed
          )}/>
          <span class="description ms ${AppUi.#checkedtask(task.completed)}">${
      task.description
    }</span>
        </div>
        <div class="item-icons flex align-center">
          <button class="btn">&#x1F5D1;</button>
          <button class="btn">&#x22EE;</button>
        </div>
    </li>
    `;

    container.innerHTML += taskTemplate;
  };
}
