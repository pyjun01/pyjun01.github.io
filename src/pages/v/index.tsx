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
          lang: 'ko',
        }}
        meta={[
          {
            name: 'description',
            content: 'pyjun01 개발 블로그',
          },
          {
            name: 'keywords',
            content: 'pyjun01,개발,개발자,개발 블로그',
          },
        ]}
        link={[]}
      />
      <List nodes={data.allMdx.nodes} />
    </Layout>
  );
}

export default BlogPage;
