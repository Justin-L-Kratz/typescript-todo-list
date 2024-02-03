export default class Button {
  element: HTMLElement;
  text: string;
  func: any;
  constructor(text, func) {
    this.element = document.createElement('button');
    this.element.textContent = text;
    this.element.addEventListener('click', func);
  }

  render() {
    return this.element;
  }
}
