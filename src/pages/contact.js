import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1>Contact</h1>

      <h3>Lorem</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
        repudiandae esse commodi. Porro, a repellat? Rerum, quod voluptatum
        voluptatibus, accusantium illo rem deserunt perspiciatis quo ipsam error
        id ipsum praesentium!
      </p>

      <a
        href="https://twitter.com/Edzwski"
        target="_blank"
        rel="noreferrer noopener"
      >
        Twitter
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/fridry"
        target="_blank"
        rel="noreferrer noopener"
      >
        Linkedin
      </a>
      <br />
      <a
        href="https://github.com/Fridry"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github
      </a>

      <Footer />
    </div>
  )
}

export default Contact
