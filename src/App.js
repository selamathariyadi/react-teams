import React from 'react';


import {Routes,Route} from 'react-router-dom'
import Discoverypages from './component/Routes/Discovery';

function App() {
    return (
      <>
      <Routes>
        <Route path='/' element={<Discoverypages/>}/>
      </Routes>
      
      </>
    );
}

export default App;