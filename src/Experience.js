import React, { Component } from 'react'
import './Experience.css';

export class Experience extends Component {
    render() {
        return (
            
    <section className="page-section"  id="about" >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase text-dark">EXPERIENCE</h2>
        
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December-16-2019  to January-18-2020</h4>
                  <h4 className="subheading">My Winter Internship</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">I applied for a internship in development this winter and fortunately got accepted to work in "Shlok IT Solutions" in Fafadih Chowk,Raipur.
                  In this time period i have worked mostly in Javascript,Bootstrap4 and materialized CSS building responsive Front-End Website and debugging large codes.I have learnt quite a lot during this 1 month and wish to implement the knowledge in further contests and Hackathons.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  
                  <h4 className="subheading">TED<sup>x</sup> Website</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Helped in frontend development of Ted<sup>x</sup> 2020 Event Website.</p>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </section>
                
            
        )
    }
}

export default Experience;
