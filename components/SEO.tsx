import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_NAME } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, schema }) => {
  const siteTitle = `${title} | ${COMPANY_NAME}`;
  
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`https://paws-hooves-homes.com${canonical}`} />}
      <meta name="geo.region" content="GB-LIN" />
      <meta name="geo.placename" content="Grantham" />
      <meta name="geo.position" content="52.9122;-0.6387" />
      <meta name="ICBM" content="52.9122, -0.6387" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={COMPANY_NAME} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />

      {/* Schema Markup (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;