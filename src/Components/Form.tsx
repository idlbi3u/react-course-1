import React from 'react';
import List from './List';
import Task from './Task';

interface Props{ 

    task: Task;
    setTask: React.Dispatch<React.SetStateAction<Task>>;

    list: List;
    setList: React.Dispatch<React.SetStateAction<List>>;

    lists?: List[];
    setLists?: React.Dispatch<React.SetStateAction<List[]>>;

    handleAddList: (e: React.FormEvent) => void;

    handleAddTask: (e: React.FormEvent) => void;
}

const AddForm = (props: Props) => {
    const {list, handleAddList, handleAddTask, task, setTask, setList} = props;
    return (
        <div>
            <div className='form' id='form'>
                <form onSubmit={handleAddTask}>
                    <div>
                        <label htmlFor="tast">New Task</label> <br/>
                        <input type="text" placeholder='Title' name='title' id='task' onChange={
                            (e) => {
                                setTask({...task, id: Date.now(), completed: false, title: e.currentTarget.value});
                            }
                        } value={task.title}/>
                    </div>
                    <div>
                        <input type="text" placeholder='Description' name='descrip' onChange={
                            (e) => {
                                setTask({...task, description: e.currentTarget.value});
                            }
                        } value={task.description}/>
                    </div>
                    <div>
                        <select name="assignto" 
                        onChange={
                            (e) => {
                                setTask({...task, assignedTo: e.currentTarget.value});
                            }
                        } value={task.assignedTo}>
                            <option value="">Assign to</option>
                            <option value="Eric">Eric</option>
                            <option value="Alex">Alex</option>
                            <option value="John">John</option>
                            <option value="Sam">Sam</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit' className='submit'>New Task</button>
                    </div>
                </form>

                <form onSubmit={handleAddList}>
                    <div>
                        <label htmlFor="title">New List</label> <br/>
                        <input type="text" placeholder='Title' name='list-title' id='title' onChange={
                            (e) =>{
                                setList({...list, id: Date.now(), title: e.currentTarget.value, tasks: []});
                            }
                        } value={list.title}/>
                    </div>
                    <div>
                        <button className='submit'>New List</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddForm;