import React from "react";

const Presentation = () => {
  return (
    <main className="w-full" id="">
      <div className="flex lg:flex-row justify-center items-center container max-w-5xl mx-auto flex-col-reverse px-4 min-h-screen my-4 lg:my-0 gap-12 lg:gap-0">
        <div className="flex-1 mx-auto mt-0 self-center">
          <div className="flex flex-col gap-4 max-w-md px-4">
            <div>
              <div>
                <h2 className="text-6xl font-bold  text-zinc-800 mb-2">
                  Hello world!
                </h2>
              </div>
              <div>
                <h2 className="text-7xl font-bold">
                  I am <span className="text-blue-800">Daniel</span>.
                </h2>
              </div>
            </div>

            <p className="text-neutral-700 text-justify text-xl max-w-sm ">
              I develop experiences that make people´s lives simpler through Web
              apps. I work with HTML5, CSS3, JavaScript, TypeScript, React,
              NodeJs y Deno.
            </p>
          </div>
          <div className="flex flex-row gap-1 justify-evenly sm:gap-8 mt-12 px-4 max-w-sm mx-auto">
            <a
              className="py-3 px-4  font-semibold text-md bg-blue-600  rounded
                        border border-blue-200 text-white hover:bg-blue-500 hover:border-blue-400 transition-colors"
              href="/#contact"
            >
              Contact Me!
            </a>
            <a
              className="py-3 px-4  font-semibold text-md  bg-white 
                        border rounded  hover:bg-gray-200 hover:border-gray-500 transition-colors"
              href={"/new-portfolio/Cv-Daniel_Porras.pdf"}
              download
            >
              Download my CV
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="border-4 border-slate-900 flex1 presentation-image  mx-auto max-h-96 w-auto object-center transition-all hover:backdrop-filter"
            src={"/new-portfolio/images/me.jpeg"}
            alt="my photo"
          />
        </div>
      </div>
    </main>
  );
};

export default Presentation;
