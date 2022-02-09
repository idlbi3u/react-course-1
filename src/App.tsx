import React, {  useState } from 'react';
import List from './Components/List';
import Task from './Components/Task';
import AddForm from './Components/Form';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';




// App function 
const App = () => {
    const [task, setTask] = useState<Task>({title: '', assignedTo: '', description: ''} as Task);
    const [list, setlist] = useState<List>({} as List);

    const [Lists, setLists] = useState<List[]>([]);



    const handleAddList = (e: React.FormEvent) => {
        e.preventDefault();
        if(list.title){
            setLists([...Lists, list]);
            setlist({} as List);
        }else{
            alert('Please enter a new title for the list');
        }
        
    }   

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(task);

        if(task && task.title){
            if(Lists[0] && Lists[0].tasks){
                Lists[0].tasks.push(task);
                setLists([...Lists]);
                setTask({title: '', assignedTo: '', description: ''} as Task);
            }else{
                alert('Please add a list');
            }
        }else{
            alert('Please enter a new title for the task');
        }
    }

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;
    
        console.log(result);
    
        if(!destination) return;
    
        if(destination.droppableId === source.droppableId && destination.index === source.index) return;

        Lists.map(list =>{
            if(list.id.toString() === source.droppableId){
                if(list.tasks){
                    const task = list.tasks.splice(source.index, 1);
                    Lists.map(otherlist =>{
                        if(otherlist.id.toString() === destination.droppableId){
                            if(otherlist.tasks){
                                otherlist.tasks.splice(destination.index, 0, task[0]);
                                return true;
                            }
                        }
                        return false;
                    })
                    console.log(task);
                }else{
                    alert('UNKNOWN ERROR');
                    return false;
                }
            };
            return false;
        })
        console.log(Lists);
    }
    
    return (
        <div>
            <AddForm setLists={setLists} handleAddList={handleAddList} handleAddTask={handleAddTask} task={task} setTask={setTask} list={list} setList={setlist} />

            <div className='lists'>
                <DragDropContext onDragEnd={onDragEnd}>

                {
                    Lists.map((element: List) => 
                        
                        <List key={element.id} id={element.id} title={element.title} tasks={element.tasks} Lists={Lists} setLists={setLists} />
                        
                    )
                }
                </DragDropContext>
            </div>
        </div>

    );
}

export default App;

