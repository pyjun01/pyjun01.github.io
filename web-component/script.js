// HTMlElement는 React의 Component처럼 HTML 요소를 나타내는 interface
class CurrentTime extends HTMLElement {
  constructor() {
    super();
    // element에 shadow DOM을 생성해줌
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.innerHTML = `
      <!-- <style>
        p {
          color: #f0f;
        }
      </style> -->
      <p></p>
    `;
  }

  connectedCallback() { // element가 DOM에 연결될 때 호출 됨
    this.start();
  }
  
  disconnectedCallback() { // element가 DOM에서 연결해제될 때 호출 됨
    this.stop();
  }

  // 이 외에도 attribute change, dom change에 대한 callback도 있다.

  start() {
    this._timer && this.stop();

    this._timer = setInterval(() => {
      this._shadowRoot.querySelector('p').innerText = new Date().toLocaleString();
    }, 1000);
  }

  stop() {
    console.log('disconnect');

    if (this._timer) {
      window.clearInterval(this._timer);
      this._timer = null;
    }
  }

  hi() {
    console.log('Wa!!');
  }
}

// customElements는 element 등록, 등록된 element들의 정보를 받아올수 있는 객체
// customElements.define(tagName, class);
customElements.define('current-time', CurrentTime);