import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Wordlehome from './routes/wordlehome';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Wordlehome />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
