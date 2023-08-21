import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  p, span {
    font-size: inherit;
  }

  a {
    color: #1a5b89;
    text-decoration-color: #1a5b89;
  }

  html {
    font-size: 16px;

    @media (max-width: 680px) {
      font-size: 12px;
    }
  }

  .content {
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #ccc;
      padding: 0;
    }

    pre {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    a {
      background-color: transparent;
    }

    abbr[title] {
      border-bottom: none; /* 1 */
      text-decoration: underline; /* 2 */
      text-decoration: underline dotted; /* 2 */
    }

    b,
    strong {
      font-weight: bolder;
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    img {
      border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }

    button,
    input {
      /* 1 */
      overflow: visible;
    }

    button,
    select {
      /* 1 */
      text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    legend {
      box-sizing: border-box; /* 1 */
      color: inherit; /* 2 */
      display: table; /* 1 */
      max-width: 100%; /* 1 */
      padding: 0; /* 3 */
      white-space: normal; /* 1 */
    }

    progress {
      vertical-align: baseline;
    }

    textarea {
      overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }

    [type="search"] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }

    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button; /* 1 */
      font: inherit; /* 2 */
    }

    details {
      display: block;
    }

    summary {
      display: list-item;
    }

    [hidden] {
      display: none;
    }

    font-size: 1.125rem;
    line-height: 1.6rem;
    word-break: break-word;

    h1 {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
      line-height: 1;
    }

    h2 {
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;
      line-height: 1;
    }

    h3,
    h4,
    h5,
    h6 {
      margin-top: 2rem;
      margin-bottom: 1rem;
      line-height: 1;
    }

    ul,
    ol {
      margin: 1em 0 0.75em;
      padding-left: 25px;

      > li + li {
        margin-top: 0.25rem;
      }
    }

    code:not(.code-preview) {
      padding: 0.2rem 0.325rem;
      background: rgb(26, 91, 137, 0.07);
      border-radius: 0.325rem;
      font-family: Consolas, Monaco, 'Andale Mono', monospace;
      font-size: 80%;
    }

    blockquote {
      font-size: 1rem;
      border-left: 0.2rem solid #333;
      margin: 1.5rem 0;
      padding: 0.5rem 0 0.5rem 1rem;

      @media (max-width: 680px) {
      font-size: 1.3rem;
    }
      
      > p {
        margin: 0;
      }
    }

    [data-change="add"] {
      background-color: #395d3f;
    }
  }
`;

export default GlobalStyle;
