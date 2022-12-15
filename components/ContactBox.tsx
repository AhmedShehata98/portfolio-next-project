import { nanoid } from "nanoid";
import React from "react";

type ContactBoxProps = {
  contacts: {
    key: string;
    value: string;
  }[];
};
function ContactBox({ contacts }: ContactBoxProps) {
  return (
    <li className="flex flex-col w-full lg:w-auto gap-2 px-3 py-6 bg-slate-600 rounded shadow-md">
      {contacts.map((contact) => (
        <span
          className="flex items-center justify-between gap-3"
          key={nanoid(3)}
        >
          <p className="text-zinc-50">{contact.key} :</p>
          <small className="text-zinc-300">{contact.value}</small>
        </span>
      ))}
    </li>
  );
}

export default ContactBox;
