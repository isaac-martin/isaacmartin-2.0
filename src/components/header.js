import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="header">
    <div
      style={{
        margin: '30px auto 30px auto',
        maxWidth: 960,
        padding: '2rem 1.0875rem',
        fontSize: '22px',
      }}
    >
      <nav style={{ margin: 0 }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/build">Building this site</Link>
      </nav>
    </div>
  </div>
)

export default Header
