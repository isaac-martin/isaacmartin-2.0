import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default class ProjectsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h3>Selected Projects</h3>
              <p>
                A selection of projects I have worked on over the last few
                years. There is additional work that is not shown due to either
                the product no longer being in production or legal reasons
              </p>
            </div>

            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{
                  border: '1px solid #eaecee',
                  padding: '1em 2em',
                  marginBottom: 10,
                }}
                key={post.id}
              >
                <div class="single-proj">
                  <div>{post.frontmatter.title}</div>
                  <div>
                    <p>
                      {post.frontmatter.year}
                      <a
                        className="is-small"
                        href={post.frontmatter.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginLeft: '15px',
                        }}
                      >
                        View Website →
                      </a>
                    </p>
                  </div>
                </div>
                <div className="tagList is-small">
                  {post.frontmatter.tags.map(tag => (
                    <span key={tag + `tag`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___year] }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            year
            description
            url
            client
            tags
          }
        }
      }
    }
  }
`
