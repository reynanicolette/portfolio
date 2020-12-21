import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './theme/css/main.css'

const Header = ({ siteTitle }) => (
  <header>
    <nav className="container flex-row">
      <Link to="/" className="logo">logo</Link>
      <ul className="flex-row">
        <li><Link to="#">contact</Link></li>
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
