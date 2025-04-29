import { Helmet } from 'react-helmet';

import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout path='/about'>
      <Helmet
        htmlAttributes={{
          dir: 'ltr',
          lang: 'ko',
        }}
        title='개발자 박용준'
      >
        <meta property='og:title' content='개발자 박용준' />
        <meta property='og:url' content='https://pyjun01.github.io/about' />
        <meta name='description' content='About' />
      </Helmet>
      <div>
        <h2>박용준</h2>
        <ul>
          <li>UI를 좋아합니다.</li>
          <li>Under the hood를 들여다보고 이해하는 걸 좋아합니다.</li>
          <li>새로운 기술을 접하는 걸 좋아합니다.</li>
        </ul>
        <a href='https://github.com/pyjun01' target='_blank'>
          <img src='https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white' />
        </a>
        <a href='https://www.linkedin.com/in/pyjun01/' target='_blank'>
          <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white' />
        </a>
      </div>
    </Layout>
  );
}

export default IndexPage;
