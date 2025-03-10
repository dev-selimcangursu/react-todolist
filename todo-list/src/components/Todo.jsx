import { TbClipboardList } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";

export default function Todo(props) {

  const [status, setStatus] = useState(props.todo.status);

  function todoSuccess()
  {
    setStatus(1);

  }
  return (
    <div className="w-full flex justify-between items-center p-2 text-gray-900">
      <div>
      <div className="flex items-center">
        <TbClipboardList />
        {props.todo.title}
      </div>
      {props.todo.todo}
      </div>
      <div className="flex justify-between items-center ">
        <a onClick={todoSuccess} className="cursor-pointer" type="button"><FaRegCircleCheck size={20} className={status === 1 ? "text-green-500" : "text-gray-500"} />
        </a>
      </div>
    </div>
  );
}
