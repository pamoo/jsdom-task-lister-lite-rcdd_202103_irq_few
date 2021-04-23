document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const listDiv = document.getElementById('list');
  const taskUL = document.getElementById('tasks')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputTextValue = tasks.value;
    let li = document.createElement('li');
    li.innerText = inputTextValue;
    taskUL.append(li);
  });
});
