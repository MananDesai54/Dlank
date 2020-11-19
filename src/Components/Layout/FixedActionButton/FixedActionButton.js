import { Fragment, useEffect, useRef, useState } from "react";
import M from "materialize-css";
import AddTaskForm from "../../Dashboard/AddTaskForm/AddTaskForm";

const FixedActionButton = (props) => {
  useEffect(() => {
    M.FloatingActionButton.init(floatingActionBtn.current);
  }, []);

  const floatingActionBtn = useRef();
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <AddTaskForm
        open={open}
        addTask={props.addTask}
        closeForm={() => setOpen(false)}
      />
      <div
        ref={floatingActionBtn}
        className="fixed-action-btn horizontal click-to-toggle"
      >
        <span className="btn-floating black btn-large">
          <i className="material-icons">add</i>
        </span>
        <ul>
          <li>
            <span className="btn-floating red" title="Create Team">
              <i className="material-icons">group</i>
            </span>
          </li>
          <li>
            <span
              className="btn-floating blue"
              title="Add tasks"
              onClick={() => setOpen(!open)}
            >
              <i className="material-icons">add_task</i>
            </span>
          </li>
          <li>
            <span className="btn-floating purple" title="Add Reminder">
              <i className="material-icons">add_alert</i>
            </span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default FixedActionButton;
