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
      >
        <meta name='theme-color' content='#1a5b89' />
        <meta name='description' content='pyjun01 개발 블로그' />
        <meta name='keywords' content='pyjun01,개발,개발자,개발 블로그' />
        <meta name='naver-site-verification' content='2a28f13354877854bb05feb3be7bf8f34ff88f05' />
      </Helmet>
      <List nodes={data.allMdx.nodes} />
    </Layout>
  );
}

export default BlogPage;
