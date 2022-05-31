import { useStaticQuery, graphql } from 'gatsby';
import { Helmet, HelmetProps } from 'react-helmet';
import { isBrowser } from '../utils/index';

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: HelmetProps['meta'];
  title?: string;
  slug: string;
}

const SEO = ({ description = '', lang = 'ko', meta = [], title, slug }: SeoProps) => {
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
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={meta}
    >
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
    </Helmet>
  );
};

export default SEO;
