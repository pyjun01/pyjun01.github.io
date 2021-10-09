import { usePostList } from '../../hooks/post';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import List from '../../components/List';

function BlogPage() {
  const data = usePostList();

  return (
    <Layout>
      <SEO title='All posts' />
      <List nodes={data.allMdx.nodes} />
    </Layout>
  );
}

export default BlogPage;
