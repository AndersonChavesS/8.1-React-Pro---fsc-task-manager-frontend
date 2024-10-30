import { useEffect, useState } from "react";
import axios from "axios";

import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

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
                    <AddTask />
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted === false)
                            .map((lastTask) => (
                                <TaskItem task={lastTask} />
                            ))}
                    </div>
                </div>

                <div className="completed-tasks">
                    <h3>Tarefas Concluídas</h3>
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted)
                            .map((completedTask) => (
                                <TaskItem task={completedTask} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;
