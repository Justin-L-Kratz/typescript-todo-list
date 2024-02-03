export default class Span {
  element: HTMLElement;
  text: string;
  isComplete: boolean;
  constructor(text, isComplete = false) {
    this.isComplete = isComplete;
    this.element = document.createElement('span');
    this.element.setAttribute('data-isComplete', this.isComplete.toString());
    this.element.textContent = text;
  }

  render() {
    return this.element;
  }
}
