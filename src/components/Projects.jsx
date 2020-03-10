import React,{Component} from 'react';
import '../projects.css'

export class Projects extends Component{
  render(){
    return (
      <section className="bg-light page-section" id="portfolio" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase text-dark">My Projects</h2>
            
            </div>
          </div>
          <div className="flex row" >
              <div style={{order:1}}>
                
              
    <div className="card middle">
      <div className="front ">
         <div className=" front-content middle">
      <h2 id="tedx">TED<sup >x</sup> </h2>
      
      <h2>NIT Raipur</h2>
      <h4><sup id="tedx">x</sup>=independently organized TED event</h4>
         </div>
        {/*<img src="" alt="" />*/}
      </div>
      <div className="back">
        <div className="back-content middle">
          <h2>Want to see my project</h2>
          <h2><a href="https://www.tedxnitraipur.com">Click here</a></h2>
         
        </div>
      </div>
    </div>
</div>
              <div style={{order:3}}>
              <div className="card middle">
      <div className="front ">
         <div className=" front-content middle">
      <h2 >Calculator </h2>
      
         </div>
        {/*<img src="" alt="" />*/}
      </div>
      <div className="back">
        <div className="back-content middle">
          <h2>Want to see my project</h2>
          <h2><a href="https://josh9540.github.io/Calculator-js-/">Click here</a></h2>
         
        </div>
      </div>
    </div>




              </div>
              <div style={{order:6}}>
              
              <div className="card middle">
      <div className="front ">
         <div className=" front-content middle">
      <h2>Hotel </h2>
      <h2>Website</h2>
         </div>
        {/*<img src="" alt="" />*/}
      </div>
      <div className="back">
        <div className="back-content middle">
          <h2>Want to see my project</h2>
          <h2><a href="https://josh9540.github.io/hotel-website-my-first-project-/">Click here</a></h2>
          
        </div>
      </div>
    </div>




              </div>
              <div style={{order:4}} >
 
              <div className="card middle">
      <div className="front ">
         <div className=" front-content middle">
      <h2 >React Todo App </h2>
     
         </div>
        {/*<img src="" alt="" />*/}
      </div>
      <div className="back">
        <div className="back-content middle">
          <h2>Want to see my project</h2>
          <h2><a href="https://josh9540.github.io/react-todoapp/">Click here</a></h2>
          
        </div>
      </div>
    </div>


              </div>
              <div  style={{order:5}}>
  


              <div className="card middle">
      <div className="front ">
         <div className=" front-content middle">
      <h2>Quiz App </h2>
      
         </div>
        {/*<img src="" alt="" />*/}
      </div>
      <div className="back">
        <div className="back-content middle">
          <h2>Want to see my project</h2>
          <h2><a href="https://josh9540.github.io/Quiz-App/">Click here</a></h2>
         
        </div>
      </div>
    </div>





              </div>
              <div style={{order:2}}>


              <div className="card middle">
      <div className="front ">
         <div className=" front-content middle">
      <h2>Polling App </h2>
      <h2>using Django</h2>
      
         </div>
        {/*<img src="" alt="" />*/}
      </div>
      <div className="back">
        <div className="back-content middle">
          <h2>Want to see my project</h2>
          <h2><a href="http://pollingsrijan.herokuapp.com/">Click here</a></h2>
          
        </div>
      </div>
    </div>





              </div>
          </div>
        </div>
      </section>
    );
}
}


export default Projects;