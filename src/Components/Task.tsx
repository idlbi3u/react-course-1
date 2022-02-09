import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import List from './List';

interface Task {
    index: number;
    id: number;
    title: string;
    description?: string;
    completed?: boolean;
    assignedTo?: string;

    Lists: List[];
    setLists: React.Dispatch<React.SetStateAction<List[]>>;
}

const Task = (props: Task) => {
    
    const {id, title, description, completed, index, assignedTo, Lists, setLists} = props;

    const handleComplete = (id: number) => {
        console.log('completed');
        Lists?.map(list => {
            if(list.tasks){
                list.tasks.map(task => {
                    if(task.id === id){
                        task.completed = true;
                        return true;
                    }
                    return false;
                })
            }
            return false;
        })
        setLists([...Lists]);
    }

    const handleDelete = (id: number) => {
        console.log('Delete');
        Lists?.map(list => {
            if(list.tasks){
                list.tasks.map(task => {
                    if(task.id === id){
                        if(list.tasks){
                            list.tasks.splice(list.tasks.indexOf(task), 1);
                            return true;
                        } 
                    }
                    return false;
                })
            }
            return false;
        })
        setLists([...Lists]);
    }

    const handleEdit = (id: number) => {

    }
    return (
        <Draggable draggableId={id.toString()} index={index}>
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
                            {assignedTo !== "" ? <p>Assigned to: { assignedTo }</p> : ""}
                            completed: { completed ? 'Yes' : 'No' }
                        </div>
                        <div>
                            <button className='deleteBtn' onClick={() => handleDelete(id)}>Delete</button>
                            <button className='modifyBtn' onClick={() => handleEdit(id)}>Modify</button>
                            <button className='doneBtn' onClick={() => handleComplete(id)}>Done</button>
                        </div>
                    </div>
                )
            }
        </Draggable>
        
    );
}


export default Task;