import { TbPencilDiscount } from "react-icons/tb";
import Todos  from './Todos'
import { useSelector } from "react-redux";
export default function Index()
{

    let todosCount = useSelector((state) => state.todos.value.length); // Hata düzeltildi ✅

    return(
        <div className="index__wrapper bg-white w-full p-20">
            <h2 className="text-3xl">Bugün</h2>
            <small className="flex items-center text-md"><TbPencilDiscount /><span className="ms-1">Bugün {todosCount} Yeni Görev Eklendi !</span></small>
            <Todos/>
        </div>
    )
}