import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./TaskItem.scss";

const TaskItem = ({ task }) => {
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(
                `https://eight-react-pro-fsc-task-manager-backend.onrender.com/tasks/${task._id}`
            );
        } catch (error) {
            toast.dark("Algo Deu Errado.");
        }
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input type="checkbox" defaultChecked={task.isCompleted} />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="f97474"
                    onClick={handleTaskDeletion}
                />
                <ToastContainer />
            </div>
        </div>
    );
};
export default TaskItem;
