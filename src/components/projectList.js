import React from 'react'

class ProjectList extends React.Component {
  render() {
    const { posts } = this.props
    return (
      posts && posts.map(({ node: post }) => (
        <div
          className="content"
          style={{
            border: '1px solid #eaecee',
            padding: '1em 2em',
            marginBottom: 10,
          }}
          key={post.id}
        >
          <div className="single-proj">
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
      )));
  }
}

export default ProjectList
