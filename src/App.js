import ActionButton from "./components/ActionButton";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import { useState } from "react";
import Button from "./components/Button";
import TaskList from "./components/TaskList";

// const tasks=[
//   {
//     id:1,
//     text:"gopal",
//     completed:true
//   },
//   {
//     id:2,
//     text:"text1",
//     completed:false
//   },
//   {
//     id:3,
//     text:"text1",
//     completed:false
//   },
//   {
//     id:4,
//     text:"text1",
//     completed:false
//   }
// ]

function App() {
  const [taskList, setTaskList] = useState(TaskList);
  const [newTaskText, setNewTaskText] = useState("");

  const handller = (e) => {
    const data = e.target.value;
    setNewTaskText(data);
  };

  const addTask = () => {
    const newData = {
      id: new Date().toDateString,
      text: newTaskText,
      completed: false,
    };

    TaskList.push(newData);
    setTaskList([...taskList, newData]);
    console.log(taskList);
    setNewTaskText("");
  };

  return (
    <div className="App" style={{marginLeft:50,margginTop:50}}>
      <Header header="this is task checkList" />
      <ActionButton />
      <br />
      <input type="text" value={newTaskText} onChange={(e) => handller(e)} />
      <Button text="add Task" onclick={() => addTask()} />

      <br />
      <Tasks taskList={taskList} />
    </div>
  );
}

export default App;
