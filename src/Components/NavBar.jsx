import electricity_icon from "../assets/img/electricity_icon.svg";
import hamburguesa_responsive from "../assets/img/hamburguesa_responsive.svg";

function NavBar() {
  return (
    <div>
      <nav className="bg-[#0F4072] text-white mx-auto mt-[32px] flex flex-wrap justify-around items-center rounded sm:flex sm:w-[560px] sm:py-0 md:w-[704px] md:justify-around md:py-[15px] lg:w-[960px] lg:justify-around">
        <a href="./index.html">
          <div className="flex items-center flex-shrink-0">
            <img
              className="fill-current mr-2 sm:ml-3 w-[48px] sm:w-[48px] md:w-[68px] lg:w-[78px]"
              src={electricity_icon}
              alt=""
            />
            <span className="font-bold text-sm sm:text-md md:text-xl lg:text-4xl">
              ElectricAR
            </span>
          </div>
        </a>
        {/* <!-- Hamburguesa responsive --> */}
        <div className="block sm:hidden">
          <button className="flex items-center px-3 py-2 border button-hamburger">
            <img src={hamburguesa_responsive} alt="menu_responsive" />
          </button>
        </div>
        {/* <!-- Hamburguesa FIN --> */}
        <ul className="font-bold ml-[30px] w-[100%] md:w-[70%] sm:ml-[0px] sm:text-center sm:text-sm sm:flex sm:justify-between sm:items-center lg:text-base hidden menu">
          <li className="">
            <a
              className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
              href="./index.html"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
              href="./pages/tiposenergia.html"
            >
              Tipos de Energía
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
              href="./pages/gallery.html"
            >
              Galería
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
              href="./pages/recursos.html"
            >
              Recursos
            </a>
          </li>
          <li>
            <a
              className="inline-block w-full p-4 sm:p-3 md:p-3 lg:p-5 hover:text-[#00B5A1] hover:cursor-pointer"
              href="./pages/about.html"
            >
              Sobre el proyecto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
