import React from 'react'
import PropTypes from 'prop-types'

import Content, { HTMLContent } from '../components/Content'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Github from '../components/github'

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <PageContent className="content" content={content} />
                <Link className="btn-primary shadow" to="/build">
                  Building this site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Github repo={'isaac-martin/rosemillk'} />
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      title={'home'}
      content={allMarkdownRemark.edges[0].node.html}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const indexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "home" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`
