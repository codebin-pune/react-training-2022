import axios from "axios";
import { useEffect, useState } from "react";
import ActionButtons from "../components/ActionButtons";
import Button from "../components/Button";
import Tasks from "../components/Tasks";

function TasksPage() {
  const [taskList, setTaskList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [listState, setListState] = useState("all");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  // "all", "pending", "complete"
  const addTask = () => {
    const newTask = {
      id: new Date().toString(),
      completed: false,
      title: inputText,
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

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    axios
      .get(url)
      .then((result) => {
        setTaskList(result.data);
      })
      .catch((error) => setError(error.toString()));
  }, []);

  useEffect(() => {
    const newList = taskList.filter((item) => item.title.includes(search));
    setTaskList(newList);
  }, [search]);

  return (
    <div className="App" style={{ marginLeft: 50, marginTop: 50 }}>
      <div className="tasksPage">
      <ActionButtons handleFilters={handleFilters} />
      <br />
      <input
        value={inputText}
        type="text"
        placeholder="add a new task"
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button handleClick={addTask} text="Add Task" />
      <br />
      <br />
      <input
        type="text"
        placeholder="Search the current tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
      {listToShow.length > 0 ? (
        <Tasks
          tasks={listToShow}
          removeTask={removeTask}
          handleCompelete={handleCompelete}
        />
      ) : (
        <div>Loading....</div>
      )}
      </div>
    </div>
  );
}

export default TasksPage;
