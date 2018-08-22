import React from 'react'

// Make this come from Gatsby Config or CMS?
class Github extends React.Component {
  async componentDidMount() {
    const url = `https://api.github.com/repos/${this.props.repo}`
    console.log(url)
    let res = await fetch(url),
      json = await res.json(),
      repo = json || []
    this.setState({ ...repo })
  }

  render() {
    const repo = this.state
    return (
      repo && (
        <div
          className="shadow"
          style={{
            margin: '0 auto',
            padding: '1rem',
            position: 'fixed',
            right: 60,
            bottom: 60,
            background: '#FFFDD0',
            borderRadius: 8,
          }}
        >
          <h4>Currently Working On</h4>
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
