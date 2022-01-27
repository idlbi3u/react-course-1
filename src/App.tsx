import React from 'react';
import List from './Components/List';


const card = [
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

const list = [
    {
        id: 0,
        title: 'todo list 1',
        cards: card,
    },
    {
        id: 1,
        title: 'todo list 2',
        cards: card,
    },
]

const data = list;

// App function 
const App = () => {
    return (
        <div>
            
            <div>
                {
                data.map((element) => <List key={element.id} id={element.id} title={element.title} cards={element.cards} />)
                }
            </div>

        </div>
    );
}

export default App;

