import { Link } from "react-router-dom";

function TaskCard({ task, deleteTask }) {

    return (
        <div className="task-card">

            <Link
                to={`/tasks/${task.id}`}
                className="task-link"
            >
                <h3>{task.title}</h3>
            </Link>

            <p>{task.description}</p>

            <p>
                Status:
                {task.completed ? " Completed" : " Pending"}
            </p>

            <button
                onClick={() => deleteTask(task.id)}
            >
                Delete
            </button>

        </div>
    );
}

export default TaskCard;