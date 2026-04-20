import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path }) {
  const url = `https://safetonestudio.com${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
