import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Index = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quam
        odit libero dicta iusto sed dolorem ea unde tenetur a, facere dolorum
        animi officiis illo. Culpa deleniti id nesciunt tenetur.
      </p>

      <p>
        need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default Index
