import React, { Component } from 'react';
import srijan from './assets/img/srijan1.jpg';

export class Introduction extends Component {
    render() {
        return (
            <div>
            




   

  
  <header className="masthead"  >
    <div className="container">
      <div className="intro-text">
      <div className="card" id="myimg" >
    <img className="card-img-top" src={srijan} alt="Card image"  />
    <div className="card-body">
      <h4 className="card-title">Srijan Das Biswas</h4>
      <h4 className="card-title">Front-end Developer</h4>
      <h4 className="card-title">Electronics and Communication Engineering</h4>
      <p className="card-text"></p>
     
    </div>
  </div>
  <p id="intro">Myself Srijan, a junior undergraduate of Electronics and Communication branch currently studying in NIT Raipur.
  A technical geek and a front-end web developer looking forward to be a Software Engineer.I love front-end development and therefore fully commited to get more experience in this field. </p>
  </div>
  </div>
  </header>
</div>
            
            
        );
    }
}

export default Introduction;
