import React, { createContext, useState } from 'react';

export const TaskListsContext = createContext({});

export const TaskListsProvider = (props: any) => {

    const [Lists, setLists] = useState([
        {
            id: 0,
            title: 'Tasks',
            cards: [],
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
    ]);

    return (
        <TaskListsContext.Provider value={[Lists, setLists]}>
            {props.children}
        </TaskListsContext.Provider>
    );
}