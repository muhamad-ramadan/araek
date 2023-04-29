import logo from "../../assets/images/logo.png"
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { /*faAward,*/faMedal } from "@fortawesome/free-solid-svg-icons";
//<img src={logo} alt="Araaek logo" className="w-28" />
const Navbar = () => {
  return ( 
    <div id="navCon" className="w-full fixed left-1/2 -translate-x-1/2 top-0 z-40">
      <nav
        id="nav"
        className="px-3 sm:px-0 container w-screen mx-auto flex justify-between items-center top-0 py-4"
      >
          <div className="sm:hidden w-20 md:w-32"></div>
          <img
            id="araaek-logo"
            className="w-20 md:w-32 cursor-pointer transition-all"
            src={logo}
            alt="Araaek Logo"
          />
          <ul className="relative">
            <li className="hidden sm:flex gap-3 md:gap-10 text-white child-hover:text-main-color-light child:transition-all">
              <a href="#home">الرئيسية</a>
              <div className="services-container">
                <a id="services" href="#services" className="services">خدماتنا  <span id="services-menu-arrow" className="services-menu-arrow inline-block p-0.5 border-2 border-white border-solid border-t-transparent border-r-transparent -rotate-45 mb-0.5 mr-0.5 transition-all"></span></a>
                <div className="pt-4 absolute right-20  overflow-hidden transition-all">
                  <div  id="services-menu" className="services-menu flex w-44 items-start flex-col gap-5 bg-white/20 rounded-md backdrop-blur-lg font-semibold text-main-g transition-all child:text-white child:transition-all child-hover:text-[#c6b65f]">
                    <a href="#a">المعرض</a>
                    <a href="#b">مرافـقنـا</a>
                    <a href="#c">تواصل معنا</a>
                    <a href="#d">تواصل معنا</a>
                  </div>
                </div>
              </div>
              <a href="#gallery">المعرض</a>
              <a href="#facilities">مرافـقنـا</a>
              <a href="#contact">تواصل معنا</a>
            </li>

          </ul>

        <div
          className="sm:hidden flex flex-col justify-between gap-1 child:bg-main-gold child:w-8 child:h-1 child:rounded-full"
          data-menu-btn
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hidden sm:flex justify-center gap-2 announcement child:transition child:duration-300">
          <FontAwesomeIcon icon={faMedal} className="text-5xl text-main-gold medal" />
          <p className="text-sm leading-4 cursor-default text-white announc-text">
            أفضــل فندق سياحي في <br />
            موسم الطائف من هيئة  <br />
            السيــاحة لعــــــام 2019
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;