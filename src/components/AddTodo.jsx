import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo({ setEditTodo, editTodo }) {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if(editTodo) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodo(editTodo.text);
      inputRef.current?.focus();
    }
  }, [editTodo]);

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo(todo));
  };

  const updateTodoHandler = () => {
    dispatch(updateTodo({id: editTodo.id, text: todo}));
  }

  const formHandler = (e) => {
    e.preventDefault();
    if(!editTodo) {
      addTodoHandler();
    } else {
      updateTodoHandler();
    }
    setTodo("");
    setEditTodo(null);
  }

  return (
    <form
      onSubmit={formHandler}
      className="space-x-3 mt-12 flex justify-center"
    >
      <input
        ref={inputRef}
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
      >
        {editTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
