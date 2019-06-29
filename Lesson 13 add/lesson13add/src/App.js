import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <ul>
          <li className="completed">Learn React</li>
          <li>Redux is awesome</li>
        </ul>
        <div>
          <input placeholder="Enter a new to do item" />
          <div className="button-wrapper">
            <button className="hide">Hide completed</button>
            <button className="add">Add new</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
