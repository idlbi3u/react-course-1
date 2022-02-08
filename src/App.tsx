import React, {  useState } from 'react';
import List from './Components/List';
import Task from './Components/Task';
import AddForm from './Components/Form';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';




// App function 
const App = () => {
    const [task, setTask] = useState<Task>({} as Task);
    const [list, setlist] = useState<List>({} as List);

    const [Lists, setLists] = useState<List[]>([]);



    const handleAddList = (e: React.FormEvent) => {
        e.preventDefault();
        if(list){
            setLists([...Lists, list]);
        }
        
    }   

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        
        if(task && Lists[0].tasks){
           Lists[0].tasks.push(task);
            setLists([...Lists]);
        }
    }

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;
    
        console.log(result);
    
        if(!destination) return;
    
        if(destination.droppableId === source.droppableId && destination.index === source.index) return;
    
    
    }
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <AddForm setLists={setLists} handleAddList={handleAddList} handleAddTask={handleAddTask} task={task} setTask={setTask} list={list} setList={setlist} />
            <div>
                    <div className='lists'>

                    {
                        Lists.map((element: List) => 
                            
                            <List key={element.id} id={element.id} title={element.title} tasks={element.tasks} />
                            
                        )
                    }

                    </div>
                
            </div>
        </DragDropContext>

    );
}

export default App;

