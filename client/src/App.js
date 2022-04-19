// styling
import './App.css';

// js libraries
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*<Routes>
          <Route path="/" />
        </Routes>*/}
        <p>Hello</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
