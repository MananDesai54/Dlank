import "./Task.css";
import Moment from "react-moment";

const Tasks = (props) => {
  const { task } = props;
  console.log(task);
  return (
    <div className="task">
      <h1> {task.title} </h1>
      <p>{task.description}</p>
      <Moment format="DD/MM/YYYY">{new Date(task.createdAt)}</Moment>
      <i className="material-icons">more_vert</i>
    </div>
  );
};

export default Tasks;
