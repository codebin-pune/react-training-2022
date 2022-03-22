import ActionButtons from "./components/ActionButtons";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <Header headerText="Vishal's Tasks List" />
      <ActionButtons />
      <Tasks />
    </div>
  );
}

export default App;
