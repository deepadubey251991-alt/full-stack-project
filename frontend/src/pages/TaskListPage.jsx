import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import api from "../services/api";

function TaskListPage() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {

        const response = await api.get("tasks/");

        setTasks(response.data);
    };

    return (

        <div className="container">

            <h1 className="heading">
                Task List
            </h1>

            <div className="task-grid">

                {tasks.map(task => (

                    <Link
                        to={`/tasks/${task.id}`}
                        className="task-card"
                        key={task.id}
                    >

                        <h2>{task.title}</h2>

                        <p>{task.description}</p>

                        <span>
                            {task.completed
                                ? "✅ Completed"
                                : "⏳ Pending"}
                        </span>

                    </Link>

                ))}

            </div>

        </div>
    );
}

export default TaskListPage;