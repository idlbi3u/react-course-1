import React from 'react';

interface Card {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

const Card = (props: Card) => {
    
    const {id, title, description, status} = props;

    return (
        <div className='card'>
            <h5>{ title }</h5>
            <p>{ description }</p>
        </div>
    );
}




export default Card;