import ActionButton from "./component/ActionButton";
import Tasks from "./component/Tasks";
import Header from "./component/Header";
import { useState ,useEffect } from "react";
import Button from "./component/Button";
import axios from "axios";


// const tasks=[
//   {
//     id:1,
//     text:"gopal",
//     completed:false
//   }];

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [listState,setListState]=useState("all")
  const [error,setError]=useState("");
  const [search,setSearch]=useState("");
  const [filteredResults, setFilteredResults]=useState([]);

  


  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    axios
      .get(url)
      .then((result) => {
        setTaskList(result.data);
        setFilteredResults(result.data);
      })
      .catch((error) => setError(error.toString()));
  }, []);


  useEffect(() => {
     
      const newList = taskList.filter((item) =>item.title.includes(search) );
      setTaskList(newList);
    
  }, [search]);


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
     
     const serchItem=(values)=>{
       if(values===""){
         setTaskList(filteredResults)
        }
      setSearch(values)
    
  }
    




    //   if(search==""){
    //     setSearch(values);
    //   }
    //   else{
    //     setFilteredResults(taskList)
    //   }
    //  }
          
  return (
    <div className="App" style={{marginLeft:50,margginTop:50}}>
      <Header header="this is task checkList" />
      <ActionButton  handleFilters={handleFilters}/>
      <br />
      <input type="text" value={newTaskText} onChange={(e) => handller(e)} />
      <Button text="add Task" onClick={addTask} />

      <br />
      <br/>
      <input type="text" placeholder="search item" value={search} onChange={(e) => serchItem(e.target.value.replace(/[^\w\s]/gi, ""))} />
      <br/>

      {
        error?<div>{error}</div>:null
      }

    
      {/* <Tasks 
      tasks={listToShow}
      removeTask={removeTask}
      handleComplete={handleComplete} /> */}
      
    
      {
        listToShow!=0?
      <Tasks 
      tasks={listToShow}
      removeTask={removeTask}
      handleComplete={handleComplete} />
      :<h3>Loading...</h3>
      }
    </div>
    
  );
}

export default App;
