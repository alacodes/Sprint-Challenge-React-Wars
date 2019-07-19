import React from 'react';
import CardFramework from './components/CardFramework';
import '../src/App.css';

const App = ( ) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div>
      <h1>
        <h1 className="title">Star Wars Characters</h1>
        <CardFramework />
      </h1>
    </div>
  )
}

export default App;
