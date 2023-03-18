import { Helmet } from 'react-helmet';

import { usePostList } from '../hooks/post';
import Layout from '../components/layout';
import List from '../components/List';

function IndexPage() {
  const data = usePostList();

  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          dir: 'ltr',
          lang: 'ko',
        }}
        title='pyjun01 개발 블로그'
      >
        <meta property='og:title' content='pyjun01 개발 블로그' />
        <meta property='og:url' content='https://pyjun01.github.io' />
        <meta property='og:description' content='pyjun01의 개발 블로그입니다' />
        <meta name='description' content='pyjun01의 개발 블로그입니다' />
        <meta name='keywords' content='javascript,react,자바스크립트,리액트,pyjun01,개발,개발자,개발 블로그' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='pyjun01 개발 블로그' />
        <meta name='twitter:description' content='pyjun01의 개발 블로그입니다' />
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
