// styling
import './App.css';

// js libraries
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// components
import DisplayAll from './components/DisplayAll';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  const [authorList, setAuthorList] = useState([]);

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<DisplayAll 
              authorList={authorList} 
              setAuthorList={setAuthorList} 
            />}
          />
          <Route 
            path="/author/new" 
            element={<CreateAuthor 
              authorList={authorList} 
              setAuthorList={setAuthorList} 
            />}
          />
          <Route 
            path="/author/edit/:id"
            element={<UpdateAuthor 
              authorList={authorList} 
              setAuthorList={setAuthorList} 
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
