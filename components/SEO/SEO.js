import Head from 'next/head';

/**
 * Provide SEO related meta tags to a page.
 *
 * @param {Props} props The props object.
 * @param {string} props.title Used for the page title, og:title, twitter:title, etc.
 * @param {string} props.description Used for the meta description, og:description, twitter:description, etc.
 * @param {string} props.imageUrl Used for the og:image and twitter:image. NOTE: Must be an absolute url.
 * @param {string} props.url Used for the og:url and twitter:url.
 *
 * @returns {React.ReactElement} The SEO component
 */
export default function SEO({ title, description, imageUrl, url }) {
  if (!title && !description && !imageUrl && !url) {
    return null;
  }

  return (
    <>
      <Head>
        {/*<script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N4Q75P3');`,
        }}
      /> */}
        <script defer async src='https://cdn.trustindex.io/loader.js'></script>
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />

        {title && (
          <>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
            <meta property="twitter:title" content={title} />
          </>
        )}

        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="twitter:description" content={description} />
          </>
        )}

        {imageUrl && (
          <>
            <meta property="og:image" content={imageUrl} />
            <meta property="twitter:image" content={imageUrl} />
          </>
        )}

        {url && (
          <>
            <meta property="og:url" content={url} />
            <meta property="twitter:url" content={url} />
          </>
        )}
      </Head>
    </>
  );
}
