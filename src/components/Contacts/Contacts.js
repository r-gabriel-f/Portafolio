import React from "react";

export default function Contacts() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-black bg-fondoContact p-4">
      <div className="text-white">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Contacts
        </h2>
        <p className="leading-relaxed text-lg">
          If you are interested in acquiring my services to develop your website
          or web application, feel free to contact us.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href="mailto:r.gabriel.f@outlook.com"
            target="_banks"
            className="text-neutral-700 hover:text-black no-underline"
          >
            <i className="pi pi-envelope text-4xl mb-2 text-yellow-500"></i>
            <h3 className="text-yellow-500">Email</h3>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href="https://github.com/r-gabriel-f"
            target="_banks"
            className="text-neutral-700 hover:text-black no-underline"
          >
            <i className="pi pi-github text-4xl mb-2 text-gray-800"></i>
            <h3 className="text-gray-800">Github</h3>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href="https://wa.link/mvtvgw"
            target="_banks"
            className="text-neutral-700 hover:text-black no-underline"
          >
            <i className="pi pi-whatsapp text-4xl mb-2 text-green-500"></i>
            <h3 className="text-green-500">Whatsapp</h3>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href="https://linkedin.com/in/robert-gabriel-flores-99b903234"
            target="_banks"
            className="text-neutral-700 hover:text-black no-underline"
          >
            <i className="pi pi-linkedin text-4xl mb-2 text-blue-700"></i>
            <h3 className="text-blue-700">Linkedin</h3>
          </a>
        </div>
      </div>

      <footer className="mt-8 text-center text-white">
        <p>
          &copy; {currentYear} Robert Gabriel. <br />
          All rights reserved.
        </p>
      </footer>
    </section>
  );
}
