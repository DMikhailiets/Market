import React from 'react'
import './App.css'
import { Route } from 'react-router-dom' 
import { HomePage } from './pages/index'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Route path="" render = { () => <HomePage/>}/>
    </div>
  );
}

export default App;