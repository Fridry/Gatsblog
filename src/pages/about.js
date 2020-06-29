import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const About = () => {
  return (
    <div>
      <Navbar />
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, non
        repellendus laudantium saepe dolores rerum porro iusto ab est, repellat
        et! Tenetur hic eius quod expedita deleniti! Velit, placeat
        necessitatibus!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, non
        repellendus laudantium saepe dolores rerum porro iusto ab est, repellat
        et! Tenetur hic eius quod expedita deleniti! Velit, placeat
        necessitatibus!
      </p>

      <Link to="/contact">Contact me</Link>
      <Footer />
    </div>
  )
}

export default About
