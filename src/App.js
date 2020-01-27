import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import "bootswatch/dist/sketchy/bootstrap.min.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title : 'Fabisch Kamau',
      headerLinks : [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'ContactUs', path: '/contact'}
      ],
      home: {
        title:'Be Relentles',
        subTitle: 'Projects that make a difference',
        text:'Checkout my projects '
      },
      about: {
        title:'About Me'
      },
      contact: {
        title:"let's Talk"
      }
    }
  }
  render(){
    return (
      <div id="grad">
      <Router>
        <Container fluid={true} >
          <Navbar className="border-bottom" bg="transparent"  >
            <Navbar.Brand>Fabisch Kamau </Navbar.Brand>
            <Navbar.Toggle className="border=0" aria-controls="navbar-toggle" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
           <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
           <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
           <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer />
        </Container>
      </Router>
      </div>
    );
  }

}

export default App;
