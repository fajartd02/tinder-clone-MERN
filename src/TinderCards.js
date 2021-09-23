import Person from '@material-ui/icons/Person';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Albert Einstein',
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1536px-Albert_Einstein_Head.jpg"

        },
        {
            name: 'Mark Zuckerberg',
            url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"

        },
    ]);

    const swiped = (direction, nameDelete) => {
        console.log('Removing: ' + nameDelete);
        // setLastDirection(direction);
      }
      
      const outFrame = (name) => {
        console.log(name + ' left the screen')
      }

    return (
        <div className = "tinderCards">
            <div className = "tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard 
                        className = "swipe"
                        key = {person.name}
                        preventSwipe = {["up", "down"]}
                        onSwipe = {(dir) => swiped(dir, person.name)}
                        onCardLeftScreen = {() => outFrame(person.name)}
                    >
                        <div
                            style ={{ backgroundImage: "url(" + person.url + ")" }}
                            className = "card"
                        >
                            <h3>{person.name}</h3>

                        </div>
 
                    </TinderCard>
                )) }
            </div>
        </div>
    )
}

export default TinderCards;
