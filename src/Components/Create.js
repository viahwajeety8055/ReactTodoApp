import { useState } from "react";
import './Create.css'

export default function Create(props) {
    const [id, setId] = useState(props.checkUpdate || '');
    const [task, setTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.checkUpdate) {
            props.onUpdate(id, task);
            console.log("update section");
        } else {
            props.onCreate(id, task);
            console.log("create section");
        }
    };

    return (
        <div className="create-container">
            <h2>{props.checkUpdate ? 'Update Todo' : 'Create Todo'}</h2>
            <form className="create-form" onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input
                    type="text"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <label htmlFor="task">Task:</label>
                <input
                    type="text"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button type="submit">{props.checkUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
}