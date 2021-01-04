import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './theme/css/main.css'
import Logo from "../images/logo.svg"
import { motion } from "framer-motion"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="container flex-row center">
      <Link to="/">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 120, loop: Infinity }}>
          <img src={Logo} alt="logo" className="logo"/>
        </motion.div>
      </Link>
      {/* <ul className="flex-row">
        <li><Link to="#">contact</Link></li>
      </ul> */}
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
