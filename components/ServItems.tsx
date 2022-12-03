import Link from "next/link";
import React from "react";
type ServItemsProp = {
  title: string;
  description: string;
  link: string;
};
const ServItems = ({ description, link, title }: ServItemsProp) => {
  return (
    <li className="flex flex-col items-start justify-between gap-4 shadow-lg bg-slate-600 p-3">
      <span>
        <h4 className="text-lg uppercase text-white mb-2">{title}</h4>
        <small className="text-neutral-400 capitalize">{description}</small>
      </span>
      <Link
        href={link}
        className="flex items-center gap-3 px-3 py-1 self-center lg:self-start uppercase text-emerald-400"
      >
        order now
        <i className="fi fi-sr-angle-right leading-3 text-xs"></i>
      </Link>
    </li>
  );
};

export default ServItems;
