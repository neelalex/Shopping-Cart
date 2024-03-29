import React, { Component } from 'react';

import Grocery from './components/Grocery';
import ShoppingBag from './components/ShoppingBag';
import Stats from './components/Stats';
import PocketMoney from './components/PocketMoney';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron">
          <h1>Shopping cart!</h1>
          <p>Where you can plan your daily requirements effectively</p>
          </div>
        </div>
        <PocketMoney />
        <div className="row">
          <Grocery />
          <ShoppingBag />
          <Stats />
        </div>
      </div>
    );
  }
}

export default App;
