import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Cards';
import './App.css';

const App = ( props ) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState('');
  useEffect(() => {

    axios
      .get(`https://swapi.co/api/people/`)
      .then(results => {
        setPeople(results.data.results);
      })
      .catch(error => console.log("There's an error: ", error));
  }, []);

  const arrayPeople = Array.from(people);
  arrayPeople.forEach(person => console.log(person.name));

    return (
      <div className="app">
        <h1 className="header">React Wars</h1>
          <div>
            {arrayPeople.map(person => (
              <Card key={person.name} name={person.name} gender={person.gender} homeworld={person.homeworld.name} />
            ))}
          </div>
      </div>
    );
}

export default App;
