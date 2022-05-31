const hash = (s) =>
  `hash${s.split('').reduce((num, t) => {
    num = (num << 5) - num + t.charCodeAt(0);

    return num & num;
  }, 0)}`;

class Sheet {
  tag: HTMLStyleElement;
  static item?: Sheet;

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    document.head.appendChild((this.tag = document.createElement('style')));
  }

  static get() {
    if (!Sheet.item) {
      Sheet.item = new Sheet();
    }

    return Sheet.item;
  }

  generateClassName(style) {
    if (typeof window === 'undefined') {
      return '';
    }

    const styledClassName = hash(style);

    const rule = `.${styledClassName} { ${style} }`;

    !this.tag.innerText.includes(rule) && this.tag.appendChild(document.createTextNode(rule));

    return styledClassName;
  }
}

const getter = () => Sheet.get();

export default getter;
