import React from 'react';
import { Card } from 'semantic-ui-react';



function IndivCard(props) {
    //Define variables with state
    //Return
    const name = props.name;
    const gender = props.gender;
    const homeworld = props.homeworld;

    return(
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{gender}</Card.Meta>
                <Card.Meta>{homeworld}</Card.Meta>
                <Card.Description>{name} was featured in the Star Wars Franchise.</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default IndivCard;