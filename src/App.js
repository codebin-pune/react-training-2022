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
  const [listState, setListState] = useState("all");

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

  const removeTask=(id) => {
    const index = taskList.findIndex((it)=>it.id === id);
    const newList=[...taskList.slice(0,index), ...taskList.slice(index+1)];
    setTaskList(newList);
  }
  const handleComplete=(id) => {
    const index = taskList.findIndex((it)=>it.id === id);
    let updatedItem = taskList[index];
    updatedItem.completed =!taskList[index].completed;
    const newList=[
      ...taskList.slice(0,index), 
      updatedItem, 
      ...taskList.slice(index+1)];
    setTaskList(newList);
  }
  const handleFilter = (a) => {
    setListState(a);
  }

 

  const handleChange = (e) => {
    const text = e.target.value;
    setNewTaskText(text);
  }

  const completedTask = taskList.filter((it)=> it.completed);
  const pendingTask = taskList.filter((it)=> !it.completed);
  let listToshow = taskList;

  switch(listState){
    case "all" :
      listToshow = taskList;
      break;
    case "complete" :
      listToshow = completedTask;
      break;
    case "pending" :
      listToshow = pendingTask;
      break;  
      default:
        break;
  }

  return (
    <div className="App" style={{marginLeft: 50,margintop:50}}>
     <h1>Hello ...</h1>
     <Header headerText="it my checklist"/>
     <ActionButtons handleFilter={handleFilter}/>
     <br />
     <input value={newTaskText} onChange={(e) => handleChange(e)} type="text" placeholder="add a new task" />
     <Button Text="Add task" onClick={()=>addTask()} />
     <Tasks 
     tasks={listToshow} 
     removeTask={removeTask}
     handleComplete={handleComplete}/>
    </div>
  );
}

export default App;
