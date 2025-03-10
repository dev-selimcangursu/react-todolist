import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "../app/todoSlide";

export default function AddTodo() {
  const todoList = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  const onTitle = useRef();
  const onTodo = useRef();

  function addTodoButton() {
    let newTodo = {
      id: new Date(),
      title: onTitle.current.value,
      todo: onTodo.current.value,
      status: 0,
    };
    dispatch(todos(newTodo));
    console.log(todoList);
  }

  return (
    <div className="w-full mt-20 p-6 bg-white rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Yeni Görev Ekle
      </h2>
      <input
        ref={onTitle}
        type="text"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        placeholder="Lütfen Konu Başlığı Giriniz..."
      />
      <textarea
        ref={onTodo}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        rows="4"
        placeholder="Lütfen Yapılacak İşi Detaylandırınız..."
      ></textarea>
      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 cursor-pointer transition">
          İptal Et
        </button>
        <button
          onClick={addTodoButton}
          className="px-4 py-2 bg-indigo-100 text-gray-900 rounded-lg hover:bg-indigo-300 cursor-pointer transition"
        >
          Görev Ekle
        </button>
      </div>
    </div>
  );
}
