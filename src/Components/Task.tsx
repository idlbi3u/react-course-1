import React, { useState } from 'react';
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
    const [edit, setEdit] = useState<boolean>(false);
    const [taskEdit, setTaskEdit] = useState<Task>({} as Task);
    const {id, title, description, completed, index, assignedTo, Lists, setLists} = props;

    const handleComplete = (id: number) => {
        console.log('completed');
        Lists?.map(list => {
            if(list.tasks){
                list.tasks.map(task => {
                    if(task.id === id){
                        if(task.completed){
                            task.completed = false;
                        }else{
                            task.completed = true;
                        }
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

    const handleEdit = () => {
        setEdit(true);
        setTaskEdit(props);
    }

    const update = (id: number) => {
        console.log('edit');
        console.log(id);
        console.log(taskEdit);
        Lists?.map(list => {
            if(list.tasks){
                list.tasks.map(task => {
                    if(task.id === id){
                        task.title = taskEdit.title;
                        task.description = taskEdit.description;
                        task.assignedTo = taskEdit.assignedTo;
                        return true;
                    }
                    return false;
                })
            }
            return false;
        })
        setLists([...Lists]);
        console.log(Lists);
        setEdit(false);
        setTaskEdit({} as Task);
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
                        { edit ? 
                            <div>
                                
                                <input type='text' value={taskEdit.title} onChange={(e) => setTaskEdit({...taskEdit, title: e.target.value})}/>
                                <input type='text' value={taskEdit.description} onChange={(e) => setTaskEdit({...taskEdit, description: e.target.value})}/>
                                <select  onChange={(e) => setTaskEdit({...taskEdit, assignedTo: e.target.value})}>
                                    <option value={taskEdit.assignedTo}>{taskEdit.assignedTo}</option>
                                    <option value="Eric">Eric</option>
                                    <option value="Alex">Alex</option>
                                    <option value="John">John</option>
                                    <option value="Sam">Sam</option>
                                </select>
                                <button onClick={() => update(taskEdit.id)} className='doneBtn'>Save</button>
                                
                            </div>
                         : 
                         <div>
                             <div>
                                <h5>{ title }</h5>
                                <p>{ description }</p>
                                <p>{assignedTo !== "" ? "Assigned To : " + assignedTo : ""}</p>
                                completed: { completed ? 'Yes' : 'No' }
                            </div>
                            <div>
                                <button className='deleteBtn' onClick={() => handleDelete(id)}>Delete</button>
                                <button className='modifyBtn' onClick={() => handleEdit()}>Modify</button>
                                <button className='doneBtn' onClick={() => handleComplete(id)}>Done</button>
                            </div>
                         </div>
                        }
                        
                    </div>
                )
            }
        </Draggable>
        
    );
}


export default Task;