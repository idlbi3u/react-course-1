import React, { createContext, useState } from 'react';
import Card from '../Components/Task';

// export const TaskListsContext = createContext();

export const TaskListsProvider = (props: any) => {

    const [Lists, setLists] = useState([
        {
            id: 0,
            title: 'Tasks',
            tasks: []
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

    return (
        <div>
            
        </div>
        // <TaskListsContext.Provider value={[Lists, setLists]}>
        //     {props.children}
        // </TaskListsContext.Provider>
    );


    //CETTE PARTIE NE FONCTIONNE PAS, J'AI PASSÉ DES HEURES DESSUS ET JE N'AI PAS PU LE FAIRE
}