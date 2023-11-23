import Highlight, { defaultProps, PrismTheme, Prism } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';
import styled from 'styled-components';

// Hack to *include* languages.
// @ts-ignore
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-kotlin');
require('prismjs/components/prism-swift');

const Pre = styled.pre`
  overflow-x: auto;

  border-radius: 0.166667rem;
  box-shadow: rgb(20 20 20 / 27%) 1px 1px 20px;

  > code {
    display: block;
    width: fit-content;
    min-width: 100%;
    padding: 15px 15px 15px 10px;
    font-size: 0.85rem;
    line-height: 1.6;
    font-weight: 300;
    white-space: pre;

    @media (max-width: 680px) {
      font-size: 1.25rem;
    }

    > div {
      width: fit-content;
      min-width: 100%;
    }
  }
`;

const Line = styled.div``;

const LineNo = styled.span`
  display: inline-block;
  min-width: 30px;
  padding-right: 1em;
  text-align: right;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span``;

const CodeBlock = ({ children }) => {
  const className = children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches?.groups?.lang ?? '';

  return (
    //@ts-ignore
    <Highlight {...defaultProps} code={children.props.children.trim()} language={language} theme={theme as PrismTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <code className='code-preview'>
            {tokens.map((line, i) => (
              <Line
                {...getLineProps({ line, key: i })}
                data-change={
                  line
                    .map(({ content }) => content)
                    .join('')
                    .startsWith('++')
                    ? 'add'
                    : undefined
                }
              >
                <LineNo>{i + 1}</LineNo>
                {line
                  .filter(({ content }, i) => i >= 2 || (content !== '++' && content !== '--'))
                  .map((token, key) => (
                    <LineContent {...getTokenProps({ token, key })} />
                  ))}
              </Line>
            ))}
          </code>
        </Pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
