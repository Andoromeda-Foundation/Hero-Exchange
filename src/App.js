import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {About} from "./pages/About";
import BuyPage from './pages/Buy';
import SellPage from "./pages/Sell";
import Footer from "./components/footer";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import {Error404} from "./pages/Construction";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router basename="/">
        <section className="section">
          <div className="container">
            <h1 className="title super-big">
              星云水浒 OTC
            </h1>
            <p className="subtitle">
              非官方，不担保的卡牌交换信息发布平台 <span role="img" aria-label="heart">❤️</span>
            </p>
            <nav className="navbar">
              <Link className="navbar-item" to="/" > 首页 </Link>
              <Link className="navbar-item" to="/about" > 关于 </Link>
              <Link className="navbar-item" to="/buy" > 我要买卡 </Link>
              <Link className="navbar-item" to="/sell" > 我要卖卡 </Link>
              <div className="navbar-end">
              <Link className="navbar-item is-right" to="/my" > 我的销售广告 </Link>
              </div>
            </nav>

            <div className="router-view" style={{margin: "2rem 1rem"}}>
            <Switch>
              <Route exact path="/" component={Home} />            
              <Route path="/about" component={About} />
              <Route path="/buy" 
              component={BuyPage} />
              <Route path="/sell" 
              component={SellPage} />
              <Route path="/my" 
              component={MyAccount} />
              <Route 
              component={Error404} />
              </Switch>
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
