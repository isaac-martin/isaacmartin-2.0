import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectList from '../components/projectList';

export default class ProjectsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h4>Selected Projects</h4>
              <p
                style={{
                  marginBottom: 20,
                }}
              >
                A selection of projects I have worked on over the last few
                years. There is additional work that is not shown due to either
                the product no longer being in production or legal reasons
              </p>
            </div>

            <ProjectList posts={posts}></ProjectList>
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
