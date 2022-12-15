import { nanoid } from "nanoid";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Alert from "../../components/Alert";
import ContactBox from "../../components/ContactBox";
import { IContactFormData } from "../../types/types";

const Contact = () => {
  const [formData, setFormData] = useState<Partial<IContactFormData>>({
    name: "",
    email: "",
    message: "",
  });
  const [messageIsSent, setMessageIsSent] = useState<{
    status: boolean;
    message: string;
  }>({
    status: false,
    message: "",
  });
  const [isValidForm, setIsValidForm] = useState(false);
  const contactSectionRef = useRef<HTMLElement | null>(null);
  const messageTimeoutRef = useRef<number | undefined>(0);

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
  const handleSendMessage = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    const form = ev.target as HTMLButtonElement;

    if (form.checkValidity()) {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/jsom" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!data?.pending && data?.isSent) {
          setMessageIsSent({
            status: true,
            message: data.message,
          });
        }
      } catch (error: any) {
        setMessageIsSent({
          status: true,
          message: error?.message,
        });
      }
    }
  };
  useEffect(() => {
    let timeout: number;

    timeout = +setTimeout(() => {
      contactSectionRef.current?.classList.remove("hide-section");
    }, 100);
    return () => {
      clearTimeout(timeout);
      contactSectionRef.current?.classList.add("hide-section");
    };
  }, [contactSectionRef.current?.classList?.contains("hide-section")]);

  useEffect(() => {
    messageTimeoutRef.current = +setTimeout(() => {
      setMessageIsSent({
        status: false,
        message: "",
      });
    }, 7000);
  }, [messageIsSent.status, messageIsSent.status]);
  useEffect(() => {
    if (!messageIsSent.status) {
      clearTimeout(messageTimeoutRef.current);
    } else {
      setFormData({
        email: "",
        message: "",
        name: "",
      });
      setIsValidForm(false);
    }
  }, [messageIsSent.status]);
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <section ref={contactSectionRef} className="page hide-section">
        <div className="contact-boxs">
          <h3 className="text-white text-xl uppercase mt-4">
            contact informations
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            <ContactBox
              key={nanoid(6)}
              contacts={[
                {
                  key: "email",
                  value: "ahmedshehata98@outlook.sa",
                },
                {
                  key: "telegram",
                  value: "@ahmedshehata98",
                },
                {
                  key: "whatsapp",
                  value: "@01096019665",
                },
              ]}
            />
            <ContactBox
              key={nanoid(6)}
              contacts={[
                {
                  key: "personal",
                  value: "+20-01096019665",
                },
                {
                  key: "Linked-IN",
                  value: "/in/ahmed-shehata98",
                },
              ]}
            />
            <ContactBox
              key={nanoid(6)}
              contacts={[
                {
                  key: "upwork",
                  value: "/~01b20a553681d081b1",
                },
                {
                  key: "Ureed",
                  value: "/ahmed-123182",
                },
              ]}
            />
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
              className="btn w-full lg:w-1/4 text-slate-100 mt-4"
              type="button"
              disabled={!isValidForm}
              onClick={(ev: React.MouseEvent<HTMLButtonElement>) =>
                handleSendMessage(ev)
              }
            >
              send message
            </button>
          </form>
        </div>
      </section>
      <Alert
        message={messageIsSent.message}
        severity={messageIsSent.status ? "success" : "error"}
        visiabilty={messageIsSent.status}
      />
    </>
  );
};

export default Contact;
