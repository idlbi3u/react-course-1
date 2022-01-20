import React from 'react';
import Card from './Card';

interface List {
    id: number;
    title: string;
    cards: Card[];
}

//create list component
const List = (props: List) => {
    //create list of cards
    const {id, title, cards} = props;

    return (
        <div className='list'>
            <h5>{ title }</h5>
            <div>
                { cards.map((card) => <Card key={card.id} id={card.id} title={card.title} description={card.description} status={card.status} />) }
            </div>
        </div>
    ); 
}

export default List;