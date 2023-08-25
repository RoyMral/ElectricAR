import { Link } from "react-router-dom";
import electricar_icon from "../assets/img/electricar_icon.svg";
import hamburguer from "../assets/img/hamburguer.svg";

function NavBar() {
  function handleMenu() {
    let $menu = document.querySelector(".menu");
    $menu.classList.toggle("hidden");
  }

  return (
    <nav className="bg-[#0F4072] text-white mx-auto mt-[32px] flex flex-wrap justify-around items-center rounded sm:flex sm:w-[560px] sm:py-0 md:w-[704px] md:justify-around md:py-[15px] lg:w-[960px] lg:justify-around">
      <Link to="/">
        <div className="flex items-center flex-shrink-0">
          <img
            className="fill-current mr-2 sm:ml-3 w-[48px] sm:w-[48px] md:w-[68px] lg:w-[78px]"
            src={electricar_icon}
            alt=""
          />
          <span className="font-bold text-sm sm:text-md md:text-xl lg:text-4xl">
            ElectricAR
          </span>
        </div>
      </Link>
      {/* <!-- Hamburguesa responsive --> */}
      <div className="block sm:hidden">
        <button
          onClick={handleMenu}
          className="flex items-center px-3 py-2 w-[70%]"
        >
          <img src={hamburguer} alt="menu_responsive" />
        </button>
      </div>
      {/* <!-- Hamburguesa FIN --> */}
      <ul className="font-bold ml-[30px] w-[100%] md:w-[70%] sm:ml-[0px] sm:text-center sm:text-sm sm:flex sm:justify-between sm:items-center lg:text-base hidden menu">
        <li className="">
          <Link
            to="/"
            className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/tiposdeenergia"
            className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
          >
            Tipos de Energía
          </Link>
        </li>
        <li>
          <Link
            to="/galeria"
            className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
          >
            Galería
          </Link>
        </li>
        <li>
          <Link
            to="/recursos"
            className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
          >
            Recursos
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
          >
            Sobre el proyecto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
