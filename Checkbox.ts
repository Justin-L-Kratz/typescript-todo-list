export default class Checkbox {
  element: HTMLElement;
  isComplete: boolean;
  func: any;
  constructor(isComplete = false) {
    this.isComplete = isComplete;
    this.element = document.createElement('input');
    this.element.setAttribute('type', 'checkbox');
    this.element.checked = this.isComplete;
  }

  render() {
    return this.element;
  }
}
