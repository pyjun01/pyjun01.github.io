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
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        dir: 'ltr',
        lang: 'ko',
      }}
      title={title}
    >
      <meta property='og:title' content={title} />
      <meta property='og:image' content={`https://pyjun01.github.io/${slug}-preview.png`} />
      <meta property='og:url' content={`https://pyjun01.github.io/v/${slug}`} />
      <meta property='og:description' content={metaDescription} />
      <meta name='description' content={metaDescription} />
      <meta name='twitter:card' content={'summary'} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
    </Helmet>
  );
};

export default SEO;
