export const Task = (props) => {
    return (
        <div className="task" style={{textDecorationLine: props.done ? "line-through" : "none",
                                      textDecorationThickness: props.done ? "2px" :"auto",
                                      color: props.done ? "green" : "auto"
        }} >
            <h3>{props.taskName}</h3>
            <button onClick={ () => props.changeDone(props.id)}> Done </button>
            <button onClick={ () => props.deleteTask(props.id)}> X </button>
        </div>
    );
};