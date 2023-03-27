import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import {Sidebar} from "./components"

function App() {
  return (
    
    <div className="App">
      <Sidebar/>
      <Outlet/>
    </div>
  );
}

export default App;
