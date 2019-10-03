import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo'

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navigation />
        <Logo />
      </React.Fragment>
    );
  } 
}

export default App;
