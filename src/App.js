
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './component/Hero';
import Products from './component/Products';
import { productData, productDataTwo } from './component/Products/data';
import { GlobalStyle } from './globalStyles';
import Feature from './component/Feature'
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
      <Feature />
      <Products heading='Sweet Treats For You' data={productDataTwo}/>
      <Footer />

    </Router>
  );
}

export default App;