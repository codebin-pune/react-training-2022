import ActionButtons from "./component/ActionButtons";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

//import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Hello ...</h1>
     <Header headerText="it my checklist"/>
     <ActionButtons />
     <Tasks />
    </div>
  );
}

export default App;
