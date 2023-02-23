import Task from "./Task"


type Props = {
    task: Tasks[],
    handleDelete: (category: string, taskId: number) => void
}

type Tasks = {
    title: string,
    tasks: string[],
    id: number
}

// Creating the Task list to iterate the tasklist and print details
const TaskList = (props: Props) => {
    return (
        <>
            {props.task.map((task, index) => {
                return (
                    <div key={index}>
                        <h3>{task.title}</h3>
                        <ul>
                            <Task tasks={task.tasks} category={task.title} handleDelete={props.handleDelete}/>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default TaskList;