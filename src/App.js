import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {About} from "./components/about";
import Footer from "./components/footer";
import Home from "./pages/Home";
import MyToken from "./pages/MyToken";
import Construction from "./pages/Construction";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router basename="/">
        <section className="section">
          <div className="container">
            <h1 className="title super-big">
              Crypto Heart
            </h1>
            <p className="subtitle">
              给你比 <span role="img" aria-label="heart">❤️</span>
            </p>
            <nav className="navbar">
              <Link className="navbar-item" to="/" > 首页 </Link>
              <Link className="navbar-item" to="/about" > 关于 </Link>
              <div className="navbar-end">
              <Link className="navbar-item is-right" to="/my" > 我的爱心 </Link>
              </div>
            </nav>

            <div className="router-view" style={{margin: "2rem 1rem"}}>
              <Route exact path="/" component={Home} />            
              <Route path="/about" component={About} />
              <Route path="/my" 
              component={() => Construction({pageName: '我的爱心'})} />
            </div>


          </div>
        </section>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
