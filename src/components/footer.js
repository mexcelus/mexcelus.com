import React from 'react'

export default class Footer extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }
  render() {
    return (
      <footer className="footer container">
        <a href="https://twitter.com/mexcelus" target="_blank" rel="noopener noreferrer">
            twitter
        </a>
        <a href="https://github.com/mexcelus"target="_blank" rel="noopener noreferrer">
            github
        </a>
        <a href="https://www.linkedin.com/in/guillermo-villalta-024b3693/"target="_blank" rel="noopener noreferrer">
            linkedin
        </a>
        <a
          href="https://github.com/mexcelus/gatsby-crash-course" target="_blank" rel="noopener noreferrer">
            view source
        </a>
      </footer>
    )
  }
}