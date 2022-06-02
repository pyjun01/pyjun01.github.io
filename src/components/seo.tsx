import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

interface SeoProps {
  description?: string;
  title?: string;
  slug: string;
}

const SEO = ({ description = '', title, slug }: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        dir: 'ltr',
        lang: 'ko',
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
    >
      <meta name='theme-color' content='#1a5b89' />
      <meta property='og:title' content={title || defaultTitle} />
      <meta property='og:type' content={'website'} />
      <meta property='og:image' content={`https://pyjun01.github.io/${slug}-preview.png`} />
      <meta property='og:url' content={`https://pyjun01.github.io/v/${slug}`} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:site_name' content={'pyjun01 blog'} />
      <meta property='og:locale' content={'ko_KR'} />
      <meta name='description' content={metaDescription} />
      <meta name='twitter:card' content={'summary'} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='naver-site-verification' content='2a28f13354877854bb05feb3be7bf8f34ff88f05' />
    </Helmet>
  );
};

export default SEO;
