import React from 'react';
import List from './Components/List';
import { DragDropContext } from 'react-beautiful-dnd';
import NewTaskForm from './Components/NewTaskForm';


const allCards = [
    {
        id: 0,
        title: 'todo 1',
        description: 'description 1',
        status: false,
    },
    {
        id: 1,
        title: 'todo 2',
        description: 'description 2',
        status: false,
    },
    {
        id: 2,
        title: 'todo 3',
        description: 'description 3',
        status: false,
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

// App function 
const App = () => {
    
    return (
            <div>
                <NewTaskForm />
                
                      <div className='lists'>

                        {
                            data.map((element) => 
                                <DragDropContext onDragEnd={() => {}}>
                                    <List key={element.id} id={element.id} title={element.title} cards={element.cards} />
                                </DragDropContext>
                            )
                        }

                      </div>
                
            </div>
    );
}

export default App;

