import React, { useRef, useState } from 'react';

type Props = {
    type: string
    handleSubmit?: (task?: string) => void
}

function AddField(props: Props) {

    const categoryRef = useRef<any>();
    const taskRef = useRef<any>();

    // const [category, setCategory] = useState("")
    const [task, setTask] = useState("");

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTask(e.currentTarget.value)
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.handleSubmit!(task);
    }
    return (
        <form className='my-3' onSubmit={handleFormSubmit}>
            {props.type == "CAT" ? (
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" className="form-control" id="category" placeholder="Add category" ref={categoryRef} onChange={handleChange} />
                </div>
            ) : (
                <div className="form-group">
                    <label htmlFor="task">Task</label>
                    <input type="text" className="form-control" id="task" placeholder="Add task" ref={taskRef} onChange={handleChange}/>
                </div>
            )}
            <button type="submit" className='btn btn-primary my-2'>Add</button>
        </form>
    );
}

export default AddField;