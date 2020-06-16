import React from "react"
import { Link } from "gatsby"
import "./nav.module.css"

export default function Nav() {
  return (
    <ul className="navBar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/music/">Music</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  )
}
