import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndivCard from './Cards';
import { Grid } from 'semantic-ui-react';

function CardGrid() {
  const [people, setPeople] = useState('');
  //API get
  useEffect(() => {
    axios
      .get("https://henry-mock-swapi.herokuapp.com/api")
      .then(results => {
        setPeople(results.data.results);
      })
      .catch(error => console.log("There's an error: ", error));
  }, []);

  if (!people) return <h1>LOADING, PLEASE WAIT</h1>;

  return (
    <Grid relaxed stackable columns={3}>
        {people.map((person) => 
          <IndivCard key = {person.name} name={person.name} gender={person.gender} homeworld={person.homeworld} />
          )}
    </Grid>
  );
}

export default CardGrid;

