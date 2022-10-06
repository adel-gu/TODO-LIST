import Edit from '../utils/edit';
import Check from '../utils/check';

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
    test(`completed status to true the task container should have "checked-item" class and the task input should have "checked" class`, () => {
      // Arrange
      let check = true;
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

    test(`completed property for task object should be true`, () => {
      // Arrange
      let check = true;
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
});
