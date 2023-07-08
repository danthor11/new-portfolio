import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <section
      className="flex flex-col min-h-screen justify-center items-center gap-y-12 gap-x-3 px-4 pb-6 bg-slate-900 "
      id="contact"
    >
      <h2 className="uppercase text-3xl text-center font-bold mt-10 text-slate-300">
        Contact me!
      </h2>

      <ContactForm />
      <div className="my-4 text-center">
        <h2 className="text-2xl text-slate-100 mb-2 font-semibold">
          Social medias
        </h2>
        <div className="flex gap-8 ">
          <a
            href="https://github.com/danthor11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 p-2 rounded hover:bg-gray-300 transition-colors bg-white border border-gray-300"
          >
            <div className="bg-gray-900 h-fit rounded-full">
              <img
                className="icons-social-media "
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
              />
            </div>
            <h6 className="text-gray-900 text-xs font-bold ">Github</h6>
          </a>

          <a
            href="https://www.linkedin.com/in/danielporrasdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 p-2 rounded hover:bg-gray-300 transition-colors bg-white  border border-gray-300"
          >
            <div className="bg-blue-600 h-fit ">
              <img
                className="icons-social-media "
                src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png"
              />
            </div>

            <h6 className=" text-blue-600 text-xs font-bold ">LinkedIn</h6>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
