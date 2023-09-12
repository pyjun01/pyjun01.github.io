import { Helmet } from 'react-helmet';

import { usePostList } from '../hooks/post';
import Layout from '../components/layout';
import List from '../components/List';

function IndexPage() {
  const data = usePostList();

  return (
    <Layout path='/'>
      <Helmet
        htmlAttributes={{
          dir: 'ltr',
          lang: 'ko',
        }}
        title='pyjun01'
      >
        <meta property='og:title' content='pyjun01' />
        <meta property='og:url' content='https://pyjun01.github.io' />
        <meta property='og:description' content='개발자 박용준 기술 블로그' />
        <meta name='description' content='개발자 박용준 기술 블로그' />
        <meta name='keywords' content='javascript,react,자바스크립트,리액트,pyjun01,박용준,개발,개발자,개발 블로그' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='pyjun01' />
        <meta name='twitter:description' content='개발자 박용준 기술 블로그' />
      </Helmet>
      <List nodes={data.allMdx.nodes} />
      <img
        src='https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpyjun01.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false'
        style={{ opacity: 0 }}
      />
    </Layout>
  );
}

export default IndexPage;
