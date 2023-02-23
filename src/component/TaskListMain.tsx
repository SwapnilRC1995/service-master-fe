import React, { useContext, useState } from 'react';
import {TaskListContext} from '../context/TaskListContext';
import { TaskListContextType } from '../context/TaskListContext';
import AddField from './AddField';
import CategoryDropdown from './CategoryDropdown';
import TaskList from './TaskList';


function TaskListMain() {
    const {tasklist, setTaskList} = useContext(TaskListContext) as TaskListContextType
    const [filteredTaskList, setFilteredTaskList] = useState(tasklist);
    let selectedCategory = "";
    const modifyTaskList = (c: string) => {
        c == "All" ? setFilteredTaskList(tasklist) : setFilteredTaskList(tasklist!.filter((t) => t.title == c));
    }

    const getCategory = (c: string) => {
        selectedCategory = c;
    }

    const addTaskToCategory = (task?: string) => {
        let tasks = tasklist!.map((t) => {
            if (t.title === selectedCategory) {
                t.tasks = [...t.tasks, task!]
            }
            return t
        })
        setTaskList(tasks)
        setFilteredTaskList(tasks)

    }

    const addCategory = (task?: string) => {
        let newCategory = {
            title: task!,
            tasks: [],
            id: tasklist[tasklist!.length - 1].id + 1
        }
        setTaskList([...tasklist!, newCategory])
        setFilteredTaskList([...filteredTaskList!, newCategory]);
    }

    const removeTask = (category: string, taskId: number) => {
        let tasks = tasklist!.map((t) => {
            if (t.title === category) {
                t.tasks.splice(taskId, 1)
            }
            return t
        })
        setTaskList(tasks)
        setFilteredTaskList(tasks)
    }
    return (
        <div className='row'>
            <div className='col-6 pr-4'>
                <h3>Search by category</h3>
                <CategoryDropdown category={tasklist!.map((t) => t.title)} handleOnClick={modifyTaskList} />
                <h3 className='mt-4'>Add Category</h3>
                <AddField type="CAT" handleSubmit={addCategory} />
                <h3 className='mt-4'>Add Task to category</h3>
                <CategoryDropdown category={tasklist!.map((t) => t.title)} handleOnClick={getCategory} />
                <AddField type="TAS" handleSubmit={addTaskToCategory} />
            </div>
            <div className='col-6 pl-4'>
                <TaskList task={filteredTaskList!} handleDelete={removeTask} />
            </div>
        </div>
    );
}

export default TaskListMain;