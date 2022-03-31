import Tasks from "./Tasks";
import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    axios
      .get(url)
      .then((result) => {
        console.log(result);
        setTaskList(result.data);
        setFilteredResults(result.data);
      })
      .catch((error) => setError(error.toString()));
  }, []);

  useEffect(() => {
    console.log(search.length);
    if (search.length > 0) {
      const newList = taskList.filter((item) => item.category.includes(search));
      setTaskList(newList);
    }
  }, [search]);

  const serchItem = (values) => {
    if (values === "") {
      setTaskList(filteredResults);
    }

    setSearch(values);
  };

  return (
    <div>
      <div className="App" style={{ marginLeft: 700, marginTop: 100 }}>
        <input
          type="text"
          placeholder="search item"
          value={search}
          onChange={(e) => serchItem(e.target.value.replace(/[^\w\s\s]/gi, ""))}
        />
        <br />
        <br />

        {error ? <div>{error}</div> : null}

        {taskList != 0 ? <Tasks tasks={taskList} /> : <h3>Loading...</h3>}
      </div>
    </div>
  );
}

export default Main;
