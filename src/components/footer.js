import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <div className="footer">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <nav className="footerNav" style={{ margin: 0 }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/build">Build</Link>
        <a
          href="//github.com/isaac-martin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <span
          style={{
            marginRight: 15,
          }}
        >
          isaac@weareplayground.co
        </span>
        <span>845 682 4584</span>
        {/* <Link to="/build">Building this site</Link> */}
      </nav>
    </div>
  </div>
)

export default Footer
