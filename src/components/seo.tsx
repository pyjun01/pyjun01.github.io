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
  if (!isBrowser) {
    return null;
  }

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

  const defaultMeta = [
    {
      property: 'og:title',
      content: title || defaultTitle,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: `${window.location.origin}/${slug}-preview.png`,
    },
    {
      property: 'og:url',
      content: window.location.href,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:site_name',
      content: 'pyjun01 blog',
    },
    {
      property: 'og:locale',
      content: 'ko_KR',
    },
    {
      name: 'description',
      content: metaDescription,
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[...defaultMeta, ...meta]}
    />
  );
};

export default SEO;
