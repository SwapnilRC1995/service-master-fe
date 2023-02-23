import React, { createContext, useState } from "react";

export type Tasks = {
    title: string,
    tasks: string[],
    id: number
}

export type TaskListContextType = {
    tasklist: Tasks[],
    setTaskList: Function
}

type Props = {
    children: React.ReactNode
}
export const TaskListContext = createContext<TaskListContextType | null>(null);

const TaskListContextProvider: React.FC<Props> = ({ children }) => {
    const [tasklist, setTaskList] = useState<Tasks[]>([
        {
            title: 'Humber',
            tasks: ['Task 1', 'Task 2', 'Task 3'],
            id: 1,
        },
        {
            title: 'MERN',
            tasks: ['Lab', 'Project', 'Quiz'],
            id: 2,
        },
        {
            title: 'Java',
            tasks: ['Group Discussion', 'Exam', 'Assignment'],
            id: 3,
        },
    ])

    return (
        <TaskListContext.Provider value={{tasklist, setTaskList}}>
            {children}
        </TaskListContext.Provider>
    )
}
export default TaskListContextProvider