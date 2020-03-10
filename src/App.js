import React from 'react';
import Nav from './Nav';
import Introduction from './Introduction';
import Skillset from './Skillset';
import Projects from './components/Projects';
import Experience from './Experience';
import Contact from './Contact';

import './App.css';

class App extends React.Component{
  render(){
    return (
    <div className="App">
    <Nav />
      <Introduction />
     <Skillset />
    <Projects />
    <Experience />
    <Contact />
    </div>
  );
}
}

export default App;
