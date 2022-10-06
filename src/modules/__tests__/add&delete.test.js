import Create from '../utils/create';
import Delete from '../utils/delete';

describe('Test Task', () => {
  describe('Adding', () => {
    test('Wash the dishes task should be added to the UI', () => {
      // Arrange
      document.body.innerHTML = '<ul class="todo_body_list"></ul>';
      const todoList = document.querySelector('.todo_body_list');
      const taskDescription = 'Wash the dishes';

      // Act
      Create.task(taskDescription, todoList);
      const taskItems = todoList.querySelectorAll('li');

      // Assert
      expect(taskItems).toHaveLength(1);
    });
  });
});
