import Edit from '../utils/edit';

describe('Test Task', () => {
  describe('Editing', () => {
    test('Wash the dishes task should be edited to be Take a walk!', () => {
      // Arrange
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

      // Act
      localStorage.setItem('Tasks', JSON.stringify([washDishesTask]));
      Edit.task(task, newTaskDescription);
      const updatedTaskDesc = JSON.parse(localStorage.getItem('Tasks'));

      // Assert
      expect(updatedTaskDesc[0].description).toBe('Take a walk!');
    });
  });
});
