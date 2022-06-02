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
        <meta name='theme-color' content='#1a5b89' />
        <meta name='description' content='pyjun01 개발 블로그' />
        <meta name='keywords' content='pyjun01,개발,개발자,개발 블로그' />
        <meta name='naver-site-verification' content='2a28f13354877854bb05feb3be7bf8f34ff88f05' />
        <meta name='theme-color' content='#1a5b89' />
        <meta property='og:title' content='pyjun01 개발 블로그' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://pyjun01.github.io' />
        <meta property='og:description' content='pyjun01의 개발 블로그입니다' />
        <meta property='og:site_name' content='pyjun01 blog' />
        <meta property='og:locale' content='ko_KR' />
        <meta name='description' content='pyjun01의 개발 블로그입니다' />
        <meta name='twitter:card' content={'summary'} />
        <meta name='twitter:title' content='pyjun01 개발 블로그' />
        <meta name='twitter:description' content='pyjun01의 개발 블로그입니다' />
        <meta name='naver-site-verification' content='2a28f13354877854bb05feb3be7bf8f34ff88f05' />
      </Helmet>
      <List nodes={data.allMdx.nodes} />
    </Layout>
  );
}

export default BlogPage;
