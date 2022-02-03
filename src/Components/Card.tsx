import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface Card {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

const Card = (props: Card) => {
    
    const {id, title, description, status} = props;

    return (
        <Draggable draggableId={id.toString()} index={id}>
            {
                (provided) => (
                    <div 
                    className='card'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    
                    >
                        <h5>{ title }</h5>
                        <p>{ description }</p>
                    </div>
                )
            }
        </Draggable>
        
    );
}




export default Card;