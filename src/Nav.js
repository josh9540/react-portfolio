import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <div>
             <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href=".masthead">Introduction</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Skillset</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
                
            </div>
        )
    }
}

export default Nav;
