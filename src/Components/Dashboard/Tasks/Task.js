import "./Task.css";
import Moment from "react-moment";

const Tasks = (props) => {
  const { task } = props;
  return (
    <div className="task">
      <p> {task.title} </p>
      <p>{task.description}</p>
      <p>{task.type}</p>
      <Moment format="DD/MM/YYYY">{new Date(task.createdAt)}</Moment>
      <i className="material-icons">more_vert</i>
    </div>
  );
};

export default Tasks;
