import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { todoUpdated } from '../store/features/todo/todoSlice';

const UpdateToDoForm = () => {
  const todoUpdate = useSelector((state) => state.todos.todoUpdate)
  const [update, setUpdate] = useState(todoUpdate.name);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      if(/^\s*$/.test(update)) {
        alert("Update a todo")
        setUpdate("")
        return
      } else {
        dispatch(todoUpdated({
          id: todoUpdate.id,
          name: update,
        }))
      }
  }


  return (
    <>
      <form onSubmit={handleSubmit}  className="flex space-x-3">
        <input value={update} onChange={(e) => setUpdate(e.target.value)} 
        type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200" placeholder="update Task" />
        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline">
          Update
        </button>
      </form>
    </>
  )
}

export default UpdateToDoForm;