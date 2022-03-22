import ActionButton from "./components/ActionButton";
import Tasks from "./components/Tasks";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
         <h1>gopal patidar</h1>
        <Header header="this is task checkList"/>
        <ActionButton/>
        <Tasks/>
    </div>
  );
}

export default App;
