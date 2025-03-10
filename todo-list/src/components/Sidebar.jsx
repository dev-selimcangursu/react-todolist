import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import {
  CiCirclePlus,
  CiFileOn,
  CiCalendarDate,
  CiFilter,
  CiHashtag,
} from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="bg-indigo-100 w-75 h-screen p-5 shadow-lg flex flex-col justify-between text-gray-700">
      {/* Üst Kısım */}
      <div>
        <div className="sidebar__user__info flex justify-between items-center">
          <h5>Selimcan Gürsu</h5>
          <div className="sidebar__user__icon flex justify-between items-center gap-2">
            <IoIosNotificationsOutline size={20} />
            <BsReverseLayoutTextWindowReverse  size={15} />
          </div>
        </div>
        {/* Menü Listesi */}
        <div className="sidebar__list mt-5 flex-grow">
          <a href="" className="flex items-center mt-2">
            <CiCirclePlus size={20} /> <span className="ms-1">Görev Ekle</span>
          </a>
          <a href="" className="flex items-center mt-4">
            <IoIosSearch size={20} /> <span className="ms-1">Ara</span>
          </a>
          <a href="" className="flex items-center mt-3">
            <CiFileOn size={20} /> <span className="ms-1">Klasör</span>
          </a>
          <a href="" className="flex items-center mt-3">
            <CiCalendarDate size={20} /> <span className="ms-1">Bugün</span>
          </a>
          <a href="" className="flex items-center mt-3">
            <IoCalendarOutline size={20} />{" "}
            <span className="ms-1">Yakında</span>
          </a>
          <a href="" className="flex items-center mt-3">
            <CiFilter size={18} />{" "}
            <span className="ms-1">Filtreler % Etiketler</span>
          </a>
        </div>
        <div className="sidebar__my__project mt-5">
          <small>Benim Projelerim</small>
          <a href="" className="flex items-center mt-3">
            <CiHashtag size={18} /> <span className="ms-1">Evim</span>
          </a>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="sidebar__my__project mt-5">
        <a href="" className="flex items-center mt-3">
          <FiPlus size={18} /> <span className="ms-1">Bir Ekip Ekle</span>
        </a>
        <a href="" className="flex items-center mt-3">
          <CiHashtag size={18} />{" "}
          <span className="ms-1">Şablonlara Göz At</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
