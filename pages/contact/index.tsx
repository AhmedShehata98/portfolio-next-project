import Head from "next/head";
import React, { useState } from "react";
import CopyRights from "../../components/CopyRights";
import { IContactFormData } from "../../types/types";

const Contact = () => {
  const [formData, setFormData] = useState<Partial<IContactFormData>>();
  const [isValidForm, setIsValidForm] = useState(false);

  const handleChangeFormData = (ev: React.ChangeEvent) => {
    const input = ev.target as HTMLInputElement;
    const form = input.closest("form");
    const inputName = input.name;
    const inputValue = input.value;

    setFormData((prev) => ({ ...prev, [inputName]: inputValue }));
    if (form?.checkValidity()) {
      setIsValidForm(true);
    }
  };

  return (
    <section className="contact-section">
      <Head>
        <title>Contact</title>
      </Head>
      <div className="contact-boxs">
        <h3 className="text-white text-xl uppercase">contact informations</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <li className="flex flex-col gap-2 px-3 py-6 uppercase bg-slate-600 rounded shadow-md">
            <span className="flex items-center justify-between gap-3">
              <p className="text-zinc-50">email :</p>
              <small className="text-zinc-300">ahmedshehataq98@gmail.com</small>
            </span>
            <span className="flex items-center justify-between gap-3">
              <p className="text-zinc-50">telegram :</p>
              <small className="text-zinc-300">@ahmedshehata98</small>
            </span>
            <span className="flex items-center justify-between gap-3">
              <p className="text-zinc-50">whatsapp :</p>
              <small className="text-zinc-300">@01096019665</small>
            </span>
          </li>
          <li className="flex flex-col gap-2 px-3 py-6 uppercase bg-slate-600 rounded shadow-md">
            <span className="flex items-center justify-between gap-3">
              <p className="text-zinc-50">personal :</p>
              <small className="text-zinc-300">+20-01096019665</small>
            </span>
            <span className="flex items-center justify-between gap-3">
              <p className="text-zinc-50">Linked-IN :</p>
              <small className="text-zinc-300">/in/ahmed-shehata98</small>
            </span>
          </li>
        </ul>
      </div>
      <div className="send-message">
        <h3 className="text-white text-xl uppercase">talk to me</h3>
        <form className="flex flex-col gap-3 w-full min-h-full py-4 px-3 bg-slate-600">
          <span className="input-wrapper">
            <span className="p-3 px-4 bg-slate-900 text-slate-200 ">
              <i className="fi fi-sr-user"></i>
            </span>
            <input
              className="w-full min-h-full flex-1 flex-grow px-3 text-white  bg-slate-800 focus:bg-slate-700 focus:outline-0"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData?.name}
              onChange={handleChangeFormData}
              required={true}
            />
          </span>
          <span className="input-wrapper">
            <span className="p-3 px-4 bg-slate-900 text-slate-200 ">
              <i className="fi fi-sr-at"></i>
            </span>
            <input
              className="w-full min-h-full flex-1 flex-grow px-3 text-white  bg-slate-800 focus:bg-slate-700 focus:outline-0"
              type="email"
              placeholder="email address"
              name="email"
              value={formData?.email}
              onChange={handleChangeFormData}
              required={true}
            />
          </span>
          <span className="input-wrapper">
            <span className="p-3 px-4 bg-slate-900 text-slate-200 ">
              <i className="fi fi-sr-envelope"></i>
            </span>
            <textarea
              className="w-full h-28 flex-1 flex-grow px-3 py-2 text-white  bg-slate-800 focus:bg-slate-700 focus:outline-0"
              placeholder="your message here"
              value={formData?.message}
              name="message"
              onChange={handleChangeFormData}
              required={true}
            />
          </span>
          <button
            className="btn w-1/4 text-slate-100 mt-4"
            type="submit"
            disabled={!isValidForm}
          >
            send message
          </button>
        </form>
      </div>
      <CopyRights />
    </section>
  );
};

export default Contact;
