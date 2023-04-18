import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/footer';
import Discount from './component/discount'
import Discovery from './component/jumbotron/discovery';


function App() {
    return (
      <>
      <Navbar/>
      <Discovery/>
      <Discount/>
      <Footer/>
      
      </>
    );
}

export default App;