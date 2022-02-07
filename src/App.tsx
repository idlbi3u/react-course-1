import React from 'react';
import List from './Components/List';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import NewTaskForm from './Components/NewTaskForm';


const allCards = [
    {
        index: 0,
        id: 0,
        title: 'todo 1',
        description: 'description 1',
        status: false,
        assignedTo: '',
    },
    {
        index: 1,
        id: 1,
        title: 'todo 2',
        description: 'description 2',
        status: false,
        assignedTo: '',
    },
    {
        index: 2,
        id: 2,
        title: 'todo 3',
        description: 'description 3',
        status: false,
        assignedTo: '',
    }
]

const allLists = [
    {
        id: 0,
        title: 'Tasks',
        cards: allCards,
    },

    {
        id: 1,
        title: 'In Progress',
        cards: [],
    },
    {
        id: 2,
        title: 'Done',
        cards: [],
    }
]

const data = allLists;

const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if(!destination) return;

    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add;
    let active = allLists[0].cards;
    let complete = allLists[1].cards;
    let done = allLists[2].cards;

    // Source Logic
    if (source.droppableId === "Tasks") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "In Progress") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

}

// App function 
const App = () => {
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <NewTaskForm />
                
                      <div className='lists'>

                        {
                            data.map((element) => 
                                
                                <List key={element.id} id={element.id} title={element.title} cards={element.cards} />
                                
                            )
                        }

                      </div>
                
            </div>
            </DragDropContext>
    );
}

export default App;

