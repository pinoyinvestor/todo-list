const todoList = [{
  name: 'make dinner',
  dueDate: '2024-01-14',
}, { 
  name: 'make coffee',
  dueDate: '2024-01-14'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index){
    
    const html = `
    <div class="todo-item todo-item-new">
      <div>${todoObject.name}</div>
      <div>${todoObject.dueDate}</div>
      <button onclick="todoList.splice(${index}, 1); renderTodoList();" class="delete-todo-button">Delete</button>
    </div>
  `;
  
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  if (name.trim() !== '' && dueDate) {
    todoList.push({ name, dueDate });
    inputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
  }
}
