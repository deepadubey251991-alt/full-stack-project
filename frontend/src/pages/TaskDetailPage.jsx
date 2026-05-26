import { useEffect, useState } from "react";

import {
    useParams,
    useNavigate
} from "react-router-dom";

import api from "../services/api";

import Navbar from "../components/Navbar";

function TaskDetailPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [task, setTask] = useState(null);

    useEffect(() => {
        fetchTask();
    }, []);

    const fetchTask = async () => {

        const response = await api.get(
            `tasks/${id}/`
        );

        setTask(response.data);
    };

    const toggleComplete = async () => {

        const updatedTask = {
            ...task,
            completed: !task.completed
        };

        const response = await api.put(
            `tasks/${id}/`,
            updatedTask
        );

        setTask(response.data);
    };

    if (!task) {
        return <h2>Loading...</h2>;
    }

    return (

        <div>

            <Navbar />

            <div className="detail-container">

                <h1>{task.title}</h1>

                <p>{task.description}</p>

                <div
                    className={
                        task.completed
                            ? "task-status completed"
                            : "task-status pending"
                    }
                >
                    {task.completed
                        ? "✅ Completed"
                        : "⏳ Pending"}
                </div>

                <div className="button-group">

                    <button
                        className="btn btn-primary"
                        onClick={toggleComplete}
                    >
                        Toggle Status
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={() => navigate("/")}
                    >
                        Back
                    </button>

                </div>

            </div>

        </div>
    );
}

export default TaskDetailPage;