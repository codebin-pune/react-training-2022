import ActionButton from "./components/ActionButton";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import { useState } from "react";
import Button from "./components/Button";


const tasks=[
  {
    id:1,
    text:"gopal",
    completed:false
  }];

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [listState,setListState]=useState("all")

  const handller = (e) => {
    const data = e.target.value;
    setNewTaskText(data);
  };

  const addTask = () => {
    const newData = {
      id: new Date().toString(),
      text: newTaskText,
      completed: false,
    };

  
    setTaskList([...taskList, newData]);
    setNewTaskText("");
  };


  const removeTask=(id)=>{
        const index=taskList.findIndex((item)=>item.id===id);
        const newList = [...taskList.slice(0,index),...taskList.slice(index+1)];
        setTaskList(newList);
      }

     const handleComplete=(id)=>{
      const index=taskList.findIndex((item)=>item.id===id);
      let updatedItem=taskList[index];
      updatedItem.completed=!taskList[index].completed;
      const newList =[
        ...taskList.slice(0,index),
        updatedItem,
        ...taskList.slice(index+1),
      ]
      setTaskList(newList);
     };

     const handleFilters=(action)=>{
           setListState(action)
     }

     const completedTasks=taskList.filter((item)=>item.completed);
     const pandingTasks=taskList.filter((item)=>!item.completed);
     let listToShow=taskList;

     switch(listState){
         case "all":
           listToShow=taskList;
           break;
          case "pending":
            listToShow=pandingTasks;
            break;
          case "complete":
              listToShow=completedTasks;
              break;
          default:
            break;
     }
          
  return (
    <div className="App" style={{marginLeft:50,margginTop:50}}>
      <Header header="this is task checkList" />
      <ActionButton  handleFilters={handleFilters}/>
      <br />
      <input type="text" value={newTaskText} onChange={(e) => handller(e)} />
      <Button text="add Task" onClick={addTask} />

      <br />
      <Tasks 
      tasks={listToShow}
      removeTask={removeTask}
      handleComplete={handleComplete} />
    </div>
  );
}

export default App;
