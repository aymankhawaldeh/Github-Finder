import React from 'react';
import './App.css';
import './components/layout/Navbar.js'
import Navbar from './components/layout/Navbar.js';
import FormsAndInpust from './components/layout/FormsAndInpust.js'


const Header= () =>{
    return (
      <header>
        <h1>Counter App</h1>
        
      </header>
    )
    };
    
    
    
    const Footer = () =>{
      return (
        <footer>Ayman App &copy;</footer>
        
        
      )
    };
    

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Navbar title="Github Finder" />
            <FormsAndInpust />
            <Header />
            <Footer />
           </React.Fragment>
        )
    }
}
export default App;

