import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col items-center">
      <div className="w-3/4 max-w-7xl">
      <AddTodo />
      <Todos />
      </div>
    </div>
  );
}

export default App;
