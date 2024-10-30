import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./AddTask.scss";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = () => {
    const [task, setTask] = useState("");

    const alert = toast;
    const messageError =
        " A tarefa precisa de uma descrição para ser adicionada.";

    const onChange = (e) => {
        setTask(e.target.valeu);
    };

    const handletaskAddtion = async () => {
        try {
            if (task.length === 0) {
                return alert(messageError);
            }
        } catch (error) {
            console.error(error);
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
