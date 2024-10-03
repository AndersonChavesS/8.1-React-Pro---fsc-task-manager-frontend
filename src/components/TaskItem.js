const TaskItem = ({ task }) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isComplete ? "Completa" : "Não completa"}</p>
        </>
    );
};
export default TaskItem;
