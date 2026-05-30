import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col items-center min-w-2xl">
      <div className="w-full lg:w-3/4 max-w-7xl">
      <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
      <Todos setEditTodo={setEditTodo} />
      </div>
    </div>
  );
}

export default App;
