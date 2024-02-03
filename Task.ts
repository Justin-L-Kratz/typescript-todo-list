// Bind completion state between checkbox and span

import Checkbox from './Checkbox';
import Span from './Span';
import Button from './Button';

const tasks = [
  { text: 'Wash the car', isComplete: false },
  { text: 'Buy groceries', isComplete: true },
  { text: 'Go for a walk', isComplete: false },
];

export default class Task {
  element: HTMLElement;
  text: string;
  index: number;
  isComplete: boolean;
  checkbox: any;
  span: any;
  editBtn: any;
  delBtn: any;
  constructor(text, index, isComplete = false) {
    this.element = document.createElement('li');
    this.element.id = index.toString();
    this.isComplete = isComplete;
    this.checkbox = new Checkbox(this.isComplete, this.toggleTaskStatus);
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

  toggleTaskStatus() {
    tasks[this.parentNode.id];
  }
}

function editTask(e) {
  alert(e.target);
}

function deleteTask(e) {
  alert(e.target);
}

tasks.forEach((task, index) => {
  const newTask = new Task(task.text, index, task.isComplete);
  document.querySelector('#taskList').appendChild(newTask.render());
});
