import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getProductsData } from './actions';

import Header from './Components/Header/Header';
import ProductCard from './Components/ProductCard/ProductCard';

function App(props) {

  const { getProductsData }  = props;

  getProductsData();
  return (
    <div className="App">
      <Header />
      <ProductCard />
    </div>
  );
}

const mapDispatchToProps = () => {
  return {
    getProductsData
  }
}

export default connect(null , mapDispatchToProps())(App);

