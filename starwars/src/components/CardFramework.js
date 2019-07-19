import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndivCard from './Cards';
import { Grid } from 'semantic-ui-react';

export default function CardGrid() {
  const [people, setPeople] = useState('');
  //API get
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(results => {
        setPeople(results.data.results);
      })
      .catch(error => console.log("There's an error: ", error));
  }, []);

  if (!people) return <h1>LOADING, PLEASE WAIT</h1>;

  return (
    <Grid >
        {people.map((person) => 
          <IndivCard name={person.name} gender={person.gender}/>
          )}
    </Grid>
  );
}




//based on grid example at: reactjs.org
// const CardFramework = () => (
//     <Grid columns={3} divided>
//       <Grid.Row>
//         <Grid.Column>
//           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//       </Grid.Row>
  
//       <Grid.Row>
//         <Grid.Column>
//           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   )
  
//   export default CardFramework;
  