import { Fragment, useEffect, useMemo, useState } from "react";
import FixedActionButton from "../Layout/FixedActionButton/FixedActionButton";
import { firebaseData } from "../../firebase.config";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Tasks from "./Tasks/Task";

const Dashboard = (props) => {
  const { firestore, auth } = firebaseData;
  const [tasks, setTasks] = useState([]);
  const [user] = useAuthState(auth);
  const taskRef = useMemo(() => firestore.collection("tasks"), [firestore]);

  // const authContext = useContext(AuthContext);
  // console.log(authContext);

  // const query = taskRef.orderBy("createdAt");
  // const [tasks] = useCollectionData(query);
  // console.log(tasks);

  useEffect(() => {
    if (user) {
      taskRef.where("userId", "==", user.uid).onSnapshot((snapshot) => {
        const changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type === "added") {
            setTasks((prevState) => [
              ...prevState,
              { ...change.doc.data(), id: change.doc.id },
            ]);
          }
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, taskRef]);

  console.log(tasks);

  return (
    <Fragment>
      {tasks.map((task) => (
        <Tasks key={task.id} task={task} />
      ))}
      <FixedActionButton />
    </Fragment>
  );
};

export default Dashboard;
