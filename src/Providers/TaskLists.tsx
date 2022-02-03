import React, { createContext, useState } from 'react';

export const TaskListsContext = createContext({});

export const TaskListsProvider = (props: any) => {

    const [Lists, setLists] = useState([
        {
            id: 0,
            title: 'Tasks',
            tasks: [],
        },
    
        {
            id: 1,
            title: 'In Progress',
            tasks: [],
        },
        {
            id: 2,
            title: 'Done',
            tasks: [],
        }
    ]);

    const addTast = (title: string, description: string) => {
        const newTast = {
            id: 
            title,
            description,
            status: false,
        }
        setLists();
    }
    return (
        <TaskListsContext.Provider value={[Lists, setLists]}>
            {props.children}
        </TaskListsContext.Provider>
    );
}