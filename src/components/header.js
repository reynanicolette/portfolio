import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './css/main.css'

const Header = ({ siteTitle }) => (
  <header>
    <nav className="container flex-row">
      <Link to="/" className="logo">home</Link>
      <ul className="flex-row">
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="#">contact</Link></li>
        <li><Link to="#">resources</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
