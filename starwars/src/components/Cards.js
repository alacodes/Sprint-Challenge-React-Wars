import React from 'react';
import { Grid, Card } from 'semantic-ui-react';



function IndivCard(props) {
    //Define variables with state
    //Return
    const name = props.name;
    const gender = props.gender;
    const homeworld = props.homeworld;

    return(
        <Grid.Column>
            <Card>
                <Card.Content>
                    <Card.Header>Name: {name}</Card.Header>
                    <Card.Meta>Gender: {gender}</Card.Meta>
                    <Card.Meta>Home World: {homeworld}</Card.Meta>
                    <Card.Description>{name} was featured in the Star Wars Franchise.</Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default IndivCard;