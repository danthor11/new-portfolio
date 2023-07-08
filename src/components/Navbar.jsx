import { useState } from "react";

// FALTA AGREGAR LOS ENLACES

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  return (
    <>
      <header className="flex  flex-row justify-between z-10 py-3 container mx-auto items-center px-2">
        <h2 className="text-3xl text-blue-700 flex-1 p-4 font-sans font-semibold max-w-xs">
          Daniel Porras
        </h2>
        <div className="flex-row items-center mx-9 invisible hidden sm:visible sm:flex">
          <a className="link-items-active" href="/new-portfolio">
            Home
          </a>
          <a className="link-items" href="/new-portfolio/#skills">
            Skills
          </a>
          <a className="link-items" href="/new-portfolio/#projects">
            Projects
          </a>
          <a className="link-items" href="/new-portfolio/#contact">
            Contact
          </a>
        </div>
        <button
          className={`rounded-md p-1 transition-all  border border-transparent visible sm:invisible sm:hidden h-fit
              active:bg-neutral-100
              hover:border-blue-300 hover:border
              
            `}
          onClick={() => setMenuBtn(!menuBtn)}
        >
          <img
            src={"/new-portfolio/images/menu.png"}
            alt="icon-menu"
            className="w-10"
          />
        </button>
      </header>

      <div
        className={`absolute -left-full w-full  flex flex-col gap-2 visible sm:invisible  sm:hidden 
        transition-all text-center ${menuBtn && "menu-active"}`}
      >
        <a className="link-items-active" href="/new-portfolio">
          {" "}
          About me
        </a>
        <a className="link-items" href="/new-portfolio/#skills">
          {" "}
          Skills
        </a>
        <a className="link-items" href="/new-portfolio/#projects">
          {" "}
          Projects
        </a>
        <a className="link-items" href="/new-portfolio/#contact">
          {" "}
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
