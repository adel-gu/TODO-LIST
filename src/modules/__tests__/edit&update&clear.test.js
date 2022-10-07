import Edit from '../utils/edit';
import Check from '../utils/check';
import { clearTask } from '../base';

const mockEditTask = () => {
  document.body.innerHTML = `
      <li data-index="1">
        <input value="Take a walk!"/>
      </li>
      `;
  const task = document.querySelector('li');
  const newTaskDescription = document.querySelector('input');
  const washDishesTask = {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  };

  return { task, newTaskDescription, washDishesTask };
};

describe('Test Task', () => {
  describe('Editing', () => {
    test('Wash the dishes task should be edited to be Take a walk!', () => {
      // Arrange
      const { task, newTaskDescription, washDishesTask } = mockEditTask();

      // Act
      localStorage.setItem('Tasks', JSON.stringify([washDishesTask]));
      Edit.task(task, newTaskDescription);
      const updatedTaskDesc = JSON.parse(localStorage.getItem('Tasks'));

      // Assert
      expect(updatedTaskDesc[0].description).toBe('Take a walk!');
    });
  });
  // arguments : task(li)/ check(true or false)/ taskDes(input)
  describe('Updating', () => {
    test('completed status to true the task container should have "checked-item" class and the task input should have "checked" class', () => {
      // Arrange
      const check = true;
      document.body.innerHTML = `
      <li data-index="1">
        <input value="Take a walk!"/>
      </li>
      `;
      const task = document.querySelector('li');
      const TaskDescription = document.querySelector('input');

      // Act
      Check.task(task, check, TaskDescription);

      // Assert
      expect(task.classList).toContain('checked-item');
      expect(TaskDescription.classList).toContain('checked');
    });

    test('completed property for task object should be true', () => {
      // Arrange
      const check = true;
      // Arrange
      const { task, newTaskDescription, washDishesTask } = mockEditTask();

      // Act
      localStorage.setItem('Tasks', JSON.stringify([washDishesTask]));
      Check.task(task, check, newTaskDescription);
      const updatedTaskDesc = JSON.parse(localStorage.getItem('Tasks'));

      // Assert
      expect(updatedTaskDesc[0].completed).toBe(true);
    });
  });

  describe('clear completed', () => {
    test('Tasks from UI', () => {
    // Arrange
      document.body.innerHTML = `
      <ul class="container">
        <li class="list_todo-item checked-item" data-index="1">
          <button class="delete-btn" data-index="1"></button>
        </li>
        <li class="list_todo-item" data-index="2">
          <button class="delete-btn" data-index="2"></button>
        </li>
      </ul>
    `;

      const deletBtn = document.querySelector('.delete-btn');
      const container = document.querySelector('.container');

      // Act
      clearTask(container, deletBtn);
      deletBtn.click();

      const taskItems = document.querySelectorAll('.list_todo-item');

      // Assert
      expect(taskItems).toHaveLength(1);
    });
  });

  describe('clear completed', () => {
    test('Tasks from LocalStorage', () => {
    // Arrange
      document.body.innerHTML = `
      <ul class="container">
        <li class="list_todo-item checked-item" data-index="1">
          <button class="delete-btn" data-index="1"></button>
        </li>
        <li class="list_todo-item" data-index="2">
          <button class="delete-btn" data-index="2"></button>
        </li>
      </ul>
    `;

      const deletBtn = document.querySelector('.delete-btn');
      const container = document.querySelector('.container');
      const tasks = [
        {
          description: 'Wash the dishes',
          completed: false,
          index: 1,
        },
        {
          description: 'Take a walk!',
          completed: false,
          index: 2,
        },
      ];

      // Act
      localStorage.setItem('Tasks', JSON.stringify(tasks));
      clearTask(container, deletBtn);
      deletBtn.click();
      const taskItems = JSON.parse(localStorage.getItem('Tasks'));

      // Assert
      expect(taskItems).toHaveLength(1);
      expect(taskItems[0].index).toBe(1);
    });
  });
});
