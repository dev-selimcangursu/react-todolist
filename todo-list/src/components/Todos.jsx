import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";



export default function Todos() {
  let todos = useSelector((state) => state.todos.value);
  
  return (
    <div className="w-full  h-auto flex flex-col p-4">
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
      <AddTodo />
    </div>
  );
}
