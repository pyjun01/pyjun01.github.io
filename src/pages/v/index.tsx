import { usePostList } from '../../hooks/post';
import Layout from '../../components/layout';
import { Helmet } from 'react-helmet';
import List from '../../components/List';

function BlogPage() {
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
        <meta name='keywords' content='pyjun01,개발,개발자,개발 블로그' />
        <meta name='twitter:card' content={'summary'} />
        <meta name='twitter:title' content='pyjun01 개발 블로그' />
        <meta name='twitter:description' content='pyjun01의 개발 블로그입니다' />
      </Helmet>
      <List nodes={data.allMdx.nodes} />
    </Layout>
  );
}

export default BlogPage;
