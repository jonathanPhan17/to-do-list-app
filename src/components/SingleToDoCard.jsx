import { BsTrashFill, BsCheckSquare } from 'react-icons/bs';
import { FaEdit } from "react-icons/fa";
import { todoDeleted, toggleInputForm, todoToggled } from '../store/features/todo/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

const SingleToDoCard = (props) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todos.find((todo) => todo.id === props.id));
 // const [isDone, setIsDone] = useState(props.completed);

  const handleToggle = () => {
   // setIsDone(!isDone);
    dispatch(todoToggled(props.id));
  }

  return (
    <div className="flex justify-between bg-red-100 py-2 rounded shadow">
      <div className="px-4">
        <h1 className={todo.completed ? "font-semibold line-through" : "font-semibold" }>
          {props.name}
        </h1>
      </div>
      <div className="px-4 flex space-x-4">
        <BsCheckSquare onClick={handleToggle}
          className="cursor-pointer text-green-700"
          size={20}
        />
        <FaEdit
          onClick={() => dispatch(toggleInputForm({
            id: props.id,
            name: props.name,
          }))}
          className="cursor-pointer text-yellow-700"
          size={20}
        />
        <BsTrashFill
          onClick={() => dispatch(todoDeleted(props.id))}
          className="cursor-pointer text-red-700"
          size={20}
        />
      </div>
    </div>
  );
}

export default SingleToDoCard;
