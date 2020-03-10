import React, { Component } from 'react';
import django from './assets/img/django.jpg';
import html5 from './assets/img/html55.png';
import css3 from './assets/img/css3.webp';
import bootstrap4 from './assets/img/bootstrap4.png';
import javascript from './assets/img/js.png';
import reactjs from './assets/img/reactjs.png';
export class Skillset extends Component {
    render() {
        return (
            <section className="page-section" id="services"  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Skillset</h2>
          
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
        <img id="web" src={html5} />
    
          
         {/* <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            
            <i className="fab fa-html5 fa-stack-1x fa-inverse"></i>
          </span>*/}
          <h4 className="service-heading">HTML-5</h4>
          
        </div>
        <div className="col-md-4">
        <img id="web" src={css3} />
    
          {/*<span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fab fa-css3 fa-stack-1x fa-inverse"></i>
          </span>*/}
          <h4 className="service-heading">CSS-3</h4>
          
        </div>
        <div className="col-md-4">
        <img id="web" src={bootstrap4} />
    
          {/*<span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            
            <i className="fab fa-bootstrap fa-stack-1x fa-inverse"></i>
            <i class="fab fa-bootstrap"></i>
          </span>*/}
          <h4 className="service-heading">BOOTSTRAP-4</h4>
          
        </div>
      </div>

      
      <div className="row text-center">
        <div className="col-md-4">
        <img id="web" src={javascript} />
          {/*<span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
           
            
            <i className="fab fa-js fa-stack-1x fa-inverse"></i>
          </span>*/}
          <h4 className="service-heading">JAVASCRIPT</h4>
         
        </div>
        <div className="col-md-4">
        <img id="web" src={reactjs} />
       {/*} <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fab fa-react fa-stack-1x fa-inverse"></i>
          </span>*/}
          
          <h4 className="service-heading">REACT-JS</h4>
          
        </div>
        <div className="col-md-4">
        <img id="web" src={django} />
         {/*} <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-bootstrap fa-stack-1x fa-inverse"></i>
          </span>*/}
          <h4 className="service-heading">DJANGO</h4>
          
        </div>
      </div>





    </div>
  </section>
        )
    }
}

export default Skillset;
