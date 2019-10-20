import React from 'react'

// Make this come from Gatsby Config or CMS?
class Github extends React.Component {
  async componentDidMount() {
    const url = `https://api.github.com/repos/${this.props.repo}`
    let res = await fetch(url),
      json = await res.json(),
      repo = json || []
    this.setState({ ...repo })
  }

  handleToggle = () => {
    const { onToggle } = this.props
    onToggle()
  }

  render() {
    const repo = this.state
    return (
      repo && (
        <div
          className="shadow gitBox"
          style={{
            margin: '0 auto',
            padding: '1rem',
            position: 'fixed',
            background: '#FFFDD0',
            borderRadius: 8,
          }}
        >
          <h4>Currently Building</h4>
          <span
            style={{
              position: 'absolute',
              top: 15,
              right: 15,
              cursor: 'pointer',
            }}
            onClick={this.handleToggle}
          >
            &times;
          </span>
          <p
            style={{
              maxWidth: 370,
            }}
          >
            {repo.description}
          </p>
          <a
            href={repo.clone_url}
            rel="noopener noreferrer"
            target="_blank"
            style={{
              display: 'block',
            }}
          >
            See Repo
          </a>
        </div>
      )
    )
  }
}

export default Github
