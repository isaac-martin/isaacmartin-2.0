import React from 'react'

// Make this come from Gatsby Config or CMS?
class GithubIssues extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      issues: [],
    }
  }

  async componentDidMount() {
    const url = `https://api.github.com/repos/${
      this.props.repo
    }/issues?state=all`
    console.log(url)
    let res = await fetch(url),
      json = await res.json(),
      repo = json || []
    this.setState({ issues: repo })
  }

  handleToggle = () => {
    const { onToggle } = this.props
    onToggle()
  }

  render() {
    const { issues } = this.state
    return (
      issues.length && (
        <div>
          <h3
            style={{
              marginTop: 30,
            }}
          >
            Roadmap
          </h3>
          {issues.map(({ html_url, title, state, body, closed_at }) => (
            <div className={`singleIssue ${state}`}>
              <h4
                style={{
                  marginBottom: 0,
                  marginTop: 10,
                }}
              >
                {title}
              </h4>
              <p className="issue">{body}</p>
              <p>
                <span
                  style={{
                    display: 'block',
                    textTransform: 'capitalize',
                    marginTop: 10,
                  }}
                >
                  Status: {state} {closed_at}
                </span>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  View Issue
                </a>
              </p>
            </div>
          ))}
        </div>
      )
    )
  }
}

export default GithubIssues
