import { useState } from "react";
import ActionButtons from "./component/ActionButtons";
import Button from "./component/Button";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

//import './App.css';
const tasks = [
  {
    id : 1,
    text : 'task1',
    completed : false
  },
  {
    id : 2,
    text : 'task2',
    completed : true
  },
  {
    id : 3,
    text : 'task3',
    completed : false
  },
  {
    id : 4,
    text : 'task4',
    completed : false
  }
];

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [newTaskText, setNewTaskText] = useState("");

  const addTask = () => {
    console.log('i am called')
    const newTask = {
      id: new Date().toDateString(),
      text: newTaskText,
      completed: false
    }
    setTaskList([...taskList, newTask]);
    setNewTaskText("");
  }

  const handleChange = (e) => {
    const text = e.target.value;
    setNewTaskText(text);
  }

  return (
    <div className="App" style={{marginLeft: 50,margintop:50}}>
     <h1>Hello ...</h1>
     <Header headerText="it my checklist"/>
     <ActionButtons />
     <br />
     <input value={newTaskText} onChange={(e) => handleChange(e)} type="text" placeholder="add a new task" />
     <Button Text="Add task" onClick={()=>addTask()} />
     <Tasks taskList={taskList} />
    </div>
  );
}

export default App;
