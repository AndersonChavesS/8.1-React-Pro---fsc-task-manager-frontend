import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify"; // Remova ToastContainer daqui

import "./AddTask.scss";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const messageError =
        "A tarefa precisa de uma descrição para ser adicionada.";

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
      
        try {
            if (task.length === 0) {
                return toast.warn(messageError);
            }

            await axios.post(
                "https://eight-react-pro-fsc-task-manager-backend.onrender.com/tasks",
                {
                    description: task,
                    isCompleted: false,
                }
            );

            await fetchTasks();

            toast.success('Tarefa adicionada com sucesso!')

            setTask("");
        } catch (error) {
            toast.error("Algo deu errado.");
        }
    };

    return (
        <>
            <div className="add-task-container">
                <CustomInput
                    label="Adicionar tarefa..."
                    value={task}
                    onChange={onChange}
                />
                <CustomButton onClick={handleTaskAddition}>
                    <FaPlus size={14} color="#fff" />
                </CustomButton>
            </div>
        </>
    );
};

export default AddTask;
