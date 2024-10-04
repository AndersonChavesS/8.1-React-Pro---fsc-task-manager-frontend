import { useEffect, useState } from "react";
import axios from "axios";

import "./Tasks.scss";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fechtTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://eight-react-pro-fsc-task-manager-backend.onrender.com/tasks"
            );
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fechtTasks();
    }, []);

    return (
        <>
            <div className="tasks-container">
                <h2>Minhas tarefas</h2>

                <div className="last-tasks">
                    <h3>Últimas tarefas</h3>
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted === false)
                            .map((lastTask) => (
                                <p>{lastTask.description}</p>
                            ))}
                    </div>
                </div>

                <div className="completed-tasks">
                    <h3>Tarefas Concluídas</h3>
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted)
                            .map((completedTask) => (
                                <p>{completedTask.description}</p>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;
