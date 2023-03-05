import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title, description, image, article }) => {
  const { site } = useStaticQuery(query)
  const url = typeof window !== 'undefined' ? window.location.href : ''

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata

  const defaultImage = '/MattRyanPat.jpeg'

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: url,
  }

  return (
    <>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      
      {seo.url && <meta property='og:url' content={seo.url} />}
      
      {(article ? true : null) && <meta property='og:type' content='article' />}
      
      {seo.title && <meta property='og:title' content={seo.title} />}
      
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      
      {seo.image && <meta property='og:image' content={seo.image} />}
      
      <meta name='twitter:card' content='summary' />
      
      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}
      
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      
      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}
      
      {seo.image && <meta name='twitter:image' content={seo.image} />}
    </>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`