document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputtasks = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const list = document.getElementById('list');
  const task = document.getElementById('tasks')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputTextValue = inputtasks.value;
    let li = document.createElement('li');
    li.innerText = inputTextValue;
    task.append(li);
  });
});
