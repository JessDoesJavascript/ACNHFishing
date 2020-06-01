import React from 'react';



const CreatureCardFish = ({ name, location, price, time }) => {
    return (
        <div style={{
            width: "15%",
            height: "200px",
            border: "solid",
            padding: "1rem",
            margin: "0.5rem",
            boxShadow: "3px 3px 8px 0px rgba(166, 166, 166, 1)",
            borderRadius: "10px",
            background: 'white'

        }}>
            <h1 style={{
                fontSize: "1rem"
            }}
                className="creature-name">
                {name}
            </h1>
           
            <p
                className="location">
                Location: {location}
            </p>
            
            <p className="price">
            Price: {price} 
            </p>

            <p className="time">
                Available: {time}
            </p>

        </div>
    );
};


export default CreatureCardFish;