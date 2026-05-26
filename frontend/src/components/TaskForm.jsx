import { useState } from "react";

function TaskForm({ createTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        createTask({
            title,
            description,
            completed: false
        });

        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">

            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                required
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
            />

            <button type="submit">
                Add Task
            </button>

        </form>
    );
}

export default TaskForm;