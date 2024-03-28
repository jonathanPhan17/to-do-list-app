import AddToDoForm from "./AddToDoForm";
import SingleToDoCard from "./SingleToDoCard";
import UpdateToDoForm from "./UpdateToDoForm";

import bg from '../assets/gradient.png'
// import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { todosCleared, setFilter } from "../store/features/todo/todoSlice";

const Card = () => {

  const myTodos = useSelector((state) => state.todos.todos);

  const toggleForm = useSelector((state) => state.todos.toggleForm);

  const dispatch = useDispatch();

  const filter = useSelector((state) => state.todos.filter);

  let filteredTodos = myTodos;
  if (filter === "all") {
    filteredTodos = myTodos;
  } else if ( filter === "active") {
    filteredTodos = myTodos.filter(todo => !todo.completed);
  } else if ( filter === "completed") {
    filteredTodos = myTodos.filter(todo => todo.completed)
  }
  

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen w-screen bg-cover"
    >
      <div className="container mx-auto flex items-center justify-center h-screen">
        <div
          className="w-1/2 h-3/4 min-h-max bg-amber-100 
    shadow-2x1 rounded-lg p-2 items-center flex flex-col 
    space-y-10 justify-between"
        >
          <div className="flex flex-col space-y-10 w-full h-3/4 min-h-max items-center">
            <h1 className="text-3xl font-semibold ">My Todo List</h1>
            <div className="w-3/4">
              {toggleForm ? <AddToDoForm /> : <UpdateToDoForm />}
              {/* <UpdateToDoForm /> */}
            </div>
            <div className="w-3/4">
              <ul
                className="w-full max-h-72
        overflow-y-scroll"
              >
                {filteredTodos.map((todo) => (
                  <li className="mb-3" key={todo.id}>
                    <SingleToDoCard id={todo.id} name={todo.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={() => dispatch(todosCleared())}
              className=" bg-red-600 hover:bg-blue-600
                        text-white font-bold py-2 px-10 ml-5 mb-2 rounded
                        focus:outline-none focus:shadow-outline transition-all duration-300"
            >
              Clear
            </button>
            <div className="flex space-x-4 ml-14">
              <button
                className={`font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline hover:transition-all duration-300 ${
                  filter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-red-600 hover:bg-blue-600 text-white"
                }`}
                onClick={() => dispatch(setFilter("all"))}
              >
                All
              </button>
              <button
                className={`font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline hover:transition-all duration-300 ${
                  filter === "active"
                    ? "bg-blue-600 text-white"
                    : "bg-red-600 hover:bg-blue-600 text-white"
                }`}
                onClick={() => dispatch(setFilter("active"))}
              >
                Active
              </button>
              <button
                className={`font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline hover:transition-all duration-300 ${
                  filter === "completed"
                    ? "bg-blue-600 text-white"
                    : "bg-red-600 hover:bg-blue-600 text-white"
                }`}
                onClick={() => dispatch(setFilter("completed"))}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card