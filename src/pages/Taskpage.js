import axios from "axios";
import React, { useEffect, useState } from "react";
import ActionButtons from "../component/ActionButtons";
import Button from "../component/Button";
import Header from "../component/Header";
import Tasks from "../component/Tasks";

const TaskPage = () =>{
    const [taskList, setTaskList] = useState([]);
    const [newTaskText, setNewTaskText] = useState("");
    const [listState, setListState] = useState("all");
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [searchtask , setSearchTask] = useState([]);
  
    const addTask = () => {
      //console.log('i am called')
      const newTask = {
        id: new Date().toDateString(),
        title: newTaskText,
        completed: false
      }
      setTaskList([...taskList, newTask]);
      setNewTaskText("");
    }
  
    useEffect(() => {
      let url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .get(url)
        .then((result) => {
          setTaskList(result.data);
          setSearchTask(result.data);
  
        })
        .catch((error) => setError(error.toString()));
    }, []);
  
    const searchItem = (value)=>{
      //const z = e.target.value;
      //console.log (setSea);
      if(value === ""){
        setTaskList(searchtask)
      }
      setSearch(value)
    }
    useEffect(() => {
      if(search.length>0){
      const newList = taskList.filter((item) => item.title.includes(search));
      setTaskList(newList);
      }
    }, [search]);
  
  
    const removeTask=(id) => {
      const index = taskList.findIndex((it)=>it.id === id);
      console.log(index);
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
        <div>
            <h1>This is TaskPage page</h1>
            <ActionButtons handleFilter={handleFilter}/>
            <br />
            <input value={newTaskText} onChange={(e) => handleChange(e)} type="text" placeholder="add a new task" />
            <Button text="Add task" onClick={()=>addTask()} />
            <br />
            <br />
            <input text="text" placeholder= "Search item" value={search} onChange={(e) => searchItem(e.target.value)}/>
            { error ? <div><br />{error}</div> : 
            <p>
            { listToshow.length > 0 ?  
            <Tasks 
                tasks={listToshow} 
                removeTask={removeTask}
                handleComplete={handleComplete}/> 
                : <h3>Loading.....</h3> }
            </p>
            }
        </div>
    )
}
export default TaskPage;