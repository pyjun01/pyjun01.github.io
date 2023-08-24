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
        title='개발자 박용준'
      >
        <meta property='og:title' content='개발자 박용준' />
        <meta property='og:url' content='https://pyjun01.github.io/about' />
        <meta name='description' content='About' />
      </Helmet>
      <div>
        <a href='https://www.facebook.com/profile.php?id=100007085719197' target='_blank'>
          <img src='https://img.shields.io/badge/facebook-1877f2?style=flat-square&logo=facebook&logoColor=white' />
        </a>
        <a href='https://github.com/pyjun01' target='_blank'>
          <img src='https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white' />
        </a>
        <a href='https://www.linkedin.com/in/pyjun01/' target='_blank'>
          <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white' />
        </a>
        <img src='https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpyjun01.github.io/about&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false' />
      </div>
      준비중...
    </Layout>
  );
}

export default IndexPage;
