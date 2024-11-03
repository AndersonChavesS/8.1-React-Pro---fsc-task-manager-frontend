import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './TaskItem.scss'

const TaskItem = ({ task, fetchTasks }) => {
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`
            )

            if (typeof fetchTasks === 'function') {
                await fetchTasks()
            }

            toast.success('A tarefa foi removida com sucesso!')
        } catch (_error) {
            toast.error('Algo Deu Errado.')
        }
    }

    const handleTaskCompletionChange = async (e) => {
        try {
            await axios.patch(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`,
                { isCompleted: e.target.checked }
            )

            if (typeof fetchTasks === 'function') {
                await fetchTasks()
            }

            toast.success('A tarefa foi modificada com sucesso!')
        } catch (_error) {
            toast.error('Algo deu errado.')
        }
    }

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={`checkbox-container ${
                        task.isCompleted ? 'completed' : ''
                    }`}
                >
                    {task.description}
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={(e) => handleTaskCompletionChange(e)}
                    />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="f97474"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    )
}

export default TaskItem
