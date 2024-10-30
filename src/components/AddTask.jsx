import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./AddTask.scss";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = ({fetchTasks}) => {
    const [task, setTask] = useState("");

    const alert = toast;
    const messageError =
        " A tarefa precisa de uma descrição para ser adicionada.";

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handletaskAddtion = async () => {
        try {
            if (task.length === 0) {
                return alert(messageError);
            }

            await axios.post(
                "https://eight-react-pro-fsc-task-manager-backend.onrender.com/tasks",
                {
                    description: task,
                    isCompleted: false,
                }
            );

            await fetchTasks()

            setTask("")
        } catch (error) {
            console.error('Algo de errado não esta certo.');
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handletaskAddtion}>
                <FaPlus size={14} color="#fff" />
            </CustomButton>
            <ToastContainer />
        </div>
    );
};

export default AddTask;
