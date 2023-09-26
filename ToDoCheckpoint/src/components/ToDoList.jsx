import React from 'react';

const ToDoList = () => {
  const [setValue, setinputValue] = useState("");
const todos = useSelector((state) => state.todos);
const dispatch = useDispatch();
const handleAddTodo = (description) => {
dispatch(todoSlice.actions.addTodo(description));
}

  return (
    <div className="add-todo">
    <input type="text"
      className="task-input"
      placeholder="Add task"
      value={value}
      onChange={(event) => setValue(event.target.value)}>
    </input>
    <button className="task-button" onClick={handleAddTodo}>
      Save
    </button>
      
    </div>
  );
}

export default ToDoList;
