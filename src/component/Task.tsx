type Props = {
    tasks: string[],
    category: string
    handleDelete: (category: string, taskId: number) => void
}

// Creating Task component  to show each task in unordered list
const Task = (props: Props) => {
    return (
        <>
            {props.tasks.map((t, i) => {
                return (
                    <div className="d-flex justify-content-between my-2" key={i} >
                        <li className="">{t}</li>
                        <span className="btn btn-primary btn-sm" onClick={() => props.handleDelete(props.category, i)}>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                    </div>
                )
            })}
        </>
    )
}

export default Task;