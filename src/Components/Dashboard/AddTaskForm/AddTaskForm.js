import "./AddTaskForm.css";
import Input from "../../Layout/Input/Input";
import Button from "../../Layout/Button/Button";
import { Fragment, useEffect, useRef, useState } from "react";
import M from "materialize-css";

const AddTaskForm = (props) => {
  useEffect(() => {
    M.FormSelect.init(selectRef.current);
  }, []);
  const selectRef = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("task");
  const [remindAt, setRemindAt] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    console.log(title, description, type, remindAt);
    setTitle("");
    setDescription("");
    setType("task");
    setRemindAt("");
    props.addTask({ title, description, type, remindAt });
    props.closeForm();
  };

  return (
    <Fragment>
      <form
        className={`addTaskForm ${props.open ? "showAddTaskForm" : ""}`}
        onSubmit={addTask}
      >
        <i className="material-icons" onClick={props.closeForm}>
          close
        </i>
        <Input
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          validations={{ required: true }}
          value={title}
        />
        <Input
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          type="text"
          validations={{ required: true }}
          value={description}
        />
        <div className="type">
          <div>
            <select
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              ref={selectRef}
            >
              <option value="task">Task</option>
              <option value="reminder">Reminder</option>
            </select>
            <label></label>
          </div>
          {type === "reminder" && (
            <Input
              name="date"
              onChange={(e) => setRemindAt(e.target.value)}
              type="datetime-local"
              validations={{ required: true }}
              placeholder="Date-Time"
              value={remindAt}
            />
          )}
        </div>
        <Button
          className="black"
          onClick={() => {}}
          text="Add Task"
          type="submit"
        />
      </form>
    </Fragment>
  );
};

export default AddTaskForm;
