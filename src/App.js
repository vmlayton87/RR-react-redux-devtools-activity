import Counter from './Counter'
import ToDoList from './ToDoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Counter</h2>
      <Counter/>
      <h2>To Do List</h2>
      <ToDoList />
    </div>
  );
}

export default App;
