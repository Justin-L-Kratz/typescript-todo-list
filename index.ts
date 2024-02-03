import './style.css';
import Checkbox from './Checkbox';
import Span from './Span';
import Button from './Button';

const taskList = document.querySelector('#taskList');
const tasks = JSON.parse(window.localStorage.getItem('tasks'));
const input = document.querySelector('#createTask');
input.addEventListener('submit', addTask);

if (!window.localStorage.getItem('tasks')) {
  window.localStorage.setItem('tasks', '[]');
}

class Task {
  element: HTMLElement;
  text: string;
  index: number;
  isComplete: boolean;
  checkbox: any;
  span: any;
  editBtn: any;
  delBtn: any;
  constructor(text, index, isComplete) {
    this.element = document.createElement('li');
    this.element.id = index.toString();
    this.isComplete = isComplete;
    this.checkbox = new Checkbox(isComplete);
    this.checkbox.element.addEventListener('click', this.toggleTaskStatus);
    this.span = new Span(text, this.isComplete);
    this.editBtn = new Button('Edit', editTask);
    this.delBtn = new Button('X', deleteTask);

    this.element.appendChild(this.checkbox.render());
    this.element.appendChild(this.span.render());
    this.element.appendChild(this.editBtn.render());
    this.element.appendChild(this.delBtn.render());
  }

  render() {
    return this.element;
  }

  toggleTaskStatus(e) {
    const index = e.target.parentNode.id;
    tasks[index].isComplete = e.target.checked;
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}

function addTask(e) {
  e.preventDefault();
  const newTask = document.querySelector('#newTask');
  tasks.push({ text: newTask.value, isComplete: false });
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
  e.target.reset();
}

function editTask(e) {
  let index = e.target.parentNode.id;
  let newText = prompt('Please enter your new task');
  tasks[index].text = newText;
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

function deleteTask(e) {
  const index = e.target.parentNode.id;
  tasks.splice(index, 1);
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

function displayTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const newTask = new Task(task.text, index, task.isComplete);
    taskList.appendChild(newTask.render());
  });
}

displayTasks();
