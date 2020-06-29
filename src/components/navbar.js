import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header>
      <h2>
        <Link to="/">Gatsblog</Link>
      </h2>
      <ul>
        <li>
          <Link to="/" activeStyle={{ color: "green" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeStyle={{ color: "green" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" activeStyle={{ color: "green" }}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" activeStyle={{ color: "green" }}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar
