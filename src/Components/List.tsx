import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

interface List {
    id: number;
    title: string;
    tasks?: Task[];

    Lists: List[];
    setLists: React.Dispatch<React.SetStateAction<List[]>>;
}

//create list component
const List = (props: List) => {

    //create list of cards
    const {id= Date.now(), title, tasks=[], Lists, setLists} = props;

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
                                tasks.map((task, index) => 
                                <Task key={task.id} id={task.id} title={task.title} description={task.description} completed={task.completed} assignedTo={task.assignedTo} index={index} Lists={Lists} setLists={setLists}/>
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