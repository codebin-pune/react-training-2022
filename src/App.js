import { useState } from "react";
import ActionButtons from "./components/ActionButtons";
import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const tasks = [
  {
    id: 1,
    text: "gopal",
    completed: true,
  },
];
function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [inputText, setInputText] = useState("");
  const [listState, setListState] = useState("all");
  // "all", "pending", "complete"
  const addTask = () => {
    const newTask = {
      id: new Date().toString(),
      completed: false,
      text: inputText,
    };
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
    setInputText("");
  };

  const removeTask = (id) => {
    const index = taskList.findIndex((it) => it.id === id);
    const newList = [...taskList.slice(0, index), ...taskList.slice(index + 1)];
    setTaskList(newList);
  };

  const handleCompelete = (id) => {
    const index = taskList.findIndex((it) => it.id === id);
    let updatedItem = taskList[index];
    updatedItem.completed = !taskList[index].completed;
    const newList = [
      ...taskList.slice(0, index),
      updatedItem,
      ...taskList.slice(index + 1),
    ];
    setTaskList(newList);
  };

  const handleFilters = (action) => {
    setListState(action);
  };

  const completedTasks = taskList.filter((it) => it.completed);
  const pendingTasks = taskList.filter((it) => !it.completed);
  let listToShow = taskList;

  switch (listState) {
    case "all":
      listToShow = taskList;
      break;
    case "pending":
      listToShow = pendingTasks;
      break;
    case "complete":
      listToShow = completedTasks;
      break;
    default:
      break;
  }

  return (
    <div className="App" style={{ marginLeft: 50, marginTop: 50 }}>
      <Header headerText="Vishal's Tasks List!" />
      <ActionButtons handleFilters={handleFilters} />
      <br />
      <input
        value={inputText}
        type="text"
        placeholder="add a new task"
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button handleClick={addTask} text="Add Task" />
      <Tasks
        tasks={listToShow}
        removeTask={removeTask}
        handleCompelete={handleCompelete}
      />
    </div>
  );
}

export default App;
