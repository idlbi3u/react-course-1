import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    assignedTo?: string;
    handleTaskDone?: () => void;
}

const Task = (props: Task) => {
    
    const {id, title, description, completed, } = props;

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
                        <div>
                            <h5>{ title }</h5>
                            <p>{ description }</p>
                        </div>
                        <div>
                            <button>X</button>
                            <button>Modify</button>
                            <button>Done</button>
                        </div>
                    </div>
                )
            }
        </Draggable>
        
    );
}


export default Task;