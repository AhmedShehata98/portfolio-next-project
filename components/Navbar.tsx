import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

type navbarProps = {
  currentPage: string;
};
const Navbar = () => {
  const navbarRef = useRef<HTMLElement | null>(null);

  const handleShowNavbar = (ev: React.MouseEvent) => {
    const btn = ev.target as HTMLButtonElement;
    const icon = btn.firstChild as HTMLSpanElement;

    if (icon.classList.contains("fi-sr-menu-burger")) {
      icon.classList.replace("fi-sr-menu-burger", "fi-sr-cross");
      btn.parentElement?.classList.add("toggler-navbar-active");
      navbarRef.current?.classList.add("navbar-mobile-show");
    } else {
      icon.classList.replace("fi-sr-cross", "fi-sr-menu-burger");
      navbarRef.current?.classList.remove("navbar-mobile-show");
      btn.parentElement?.classList.remove("toggler-navbar-active");
    }
  };

  return (
    <header className="header-bar">
      <div className="container flex justify-between items-center mx-auto px-3 lg:py-0">
        <Link href="/" className="bg-gray-900 px-4 rounded-full">
          <img src="./logo.png" alt="logo" className="w-24 object-cover" />
        </Link>
        <div className="toggler-navbar ">
          <button
            onClick={(ev: React.MouseEvent) => handleShowNavbar(ev)}
            type="button"
            className="grid place-content-center place-items-center text-2xl text-white cursor-pointer "
          >
            <i className="fi fi-sr-menu-burger leading-3 pointer-events-none select-none"></i>
          </button>
        </div>
        <nav ref={navbarRef} className="navbar">
          <Link
            className="px-3 py-2 rounded-3xl hover:text-cyan-500 transition-colors"
            href="/"
            id="home"
          >
            home
          </Link>
          <Link
            className="px-3 py-2 rounded-3xl hover:text-cyan-500 transition-colors"
            href="/portfolio"
            id="portfolio"
          >
            portfolio
          </Link>
          <Link
            className="px-3 py-2 rounded-3xl hover:text-cyan-500 transition-colors"
            href="/contact"
            id="contact"
          >
            contact
          </Link>
          <Link
            className="px-3 py-2 rounded-3xl hover:text-cyan-500 transition-colors"
            href="/news"
            id="news"
          >
            news
          </Link>
          <Link
            className="px-8 py-2 rounded-3xl bg-cyan-500 hover:bg-gray-500 hover:text-cyan-400"
            href="/hire"
          >
            hire me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
