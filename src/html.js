import React from 'react';
import PropTypes from 'prop-types';

const googleAnalytics = `window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date()); gtag('config', 'G-M9E84M22QJ');`;

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <link rel='icon' type='image/x-icon' href='/favicons/favicon.ico'></link>
        <link rel='icon' type='image/png' href='/favicons/favicon-16.png' sizes='16x16' />
        <link rel='icon' type='image/png' href='/favicons/favicon-32.png' sizes='32x32' />
        <link rel='icon' type='image/png' href='/favicons/favicon-48.png' sizes='48x48' />
        <link rel='icon' type='image/png' href='/favicons/favicon-96.png' sizes='96x96' />
        <link rel='icon' type='image/png' href='/favicons/favicon-128.png' sizes='128x128' />
        <link rel='icon' type='image/png' href='/favicons/favicon-256.png' sizes='256x256' />
        <link rel='apple-touch-icon-precomposed' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json'></link>
        <meta name='application-name' content='pyjun01 개발 블로그' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='pyjun01 개발 블로그' />
        <meta property='og:locale' content='ko_KR' />
        <meta name='theme-color' content='#1a5b89' />
        <meta name='naver-site-verification' content='2a28f13354877854bb05feb3be7bf8f34ff88f05' />
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-M9E84M22QJ'></script>
        <script dangerouslySetInnerHTML={{ __html: googleAnalytics }} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
