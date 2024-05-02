import { Link } from "react-router-dom";

function TypesEnergy() {
  return (
    <ul className="font-bold ml-5 -mt-5 sm:text-left sm:text-sm sm:flex sm:flex-col lg:text-base absolute bg-[rgba(15,64,114,0.9)] z-10">
      <li className="p-2 hover:bg-[#4274a7]">
        <Link to="/tipohidroelectrica" className="w-full  hover:cursor-pointer">
          Hidroeléctrica
        </Link>
      </li>
      <li className="p-2 hover:bg-[#4274a7]">
        <Link to="/tipogeotermica" className="w-full  hover:cursor-pointer">
          Geotérmica
        </Link>
      </li>
      <li className="p-2 hover:bg-[#4274a7]">
        <Link to="/tipoeolica" className="w-full  hover:cursor-pointer">
          Eólica
        </Link>
      </li>
      <li className="p-2 hover:bg-[#4274a7]">
        <Link to="/tiposolar" className="w-full  hover:cursor-pointer">
          Solar
        </Link>
      </li>
    </ul>
  );
}

export default TypesEnergy;
