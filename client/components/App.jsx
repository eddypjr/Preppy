import React, { Component } from 'react';
import Week from './Week.jsx';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Starch</h1>
        {/* logout button */}
        <Week />
      </div>
    )
  }
  
}

export default App;