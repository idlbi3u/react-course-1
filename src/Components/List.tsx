import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

interface List {
    id: number;
    title: string;
    tasks?: Task[];
}

//create list component
const List = (props: List) => {

    //create list of cards
    const {id= Date.now(), title, tasks=[]} = props;

    return (
        <Droppable droppableId={id.toString()}>
            

                {
                    (provided) => (
                    <div className='list'>
                        <h2>{ title }</h2>
                        <div 
                        ref={provided.innerRef} 
                        {... provided.droppableProps}
                        >
                            {
                                tasks.map((task) => 
                                <Task key={task.id} id={task.id} title={task.title} description={task.description} completed={task.completed} />
                                )
                            }
                            
                            {provided.placeholder}
                        </div>
                        
                    </div> 
                    )
                }
                
        </Droppable>
    ); 
}

export default List;