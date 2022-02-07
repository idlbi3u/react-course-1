import React from 'react';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';

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
        <Droppable droppableId={title}>
            

                {
                    (provided) => (
                    <div className='list'>
                        <h2>{ title }</h2>
                        <div 
                        ref={provided.innerRef} 
                        {... provided.droppableProps}
                        >
                            {cards.map((card, index) => 
                                
                            <Card key={card.id} id={card.id} title={card.title} description={card.description} status={card.status} index={index} />
                            
                            
                            )}
                            {provided.placeholder}
                        </div>
                        
                    </div> 
                    )
                }
                
            
        </Droppable>
    ); 
}

export default List;