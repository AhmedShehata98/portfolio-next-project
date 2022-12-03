import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type navbarProps = {
  currentPage: string;
};
const Navbar = () => {
  const navbarRef = useRef<HTMLElement | null>(null);

  const { route } = useRouter();

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
  const handleClickNavlinks = (
    navbarRef: React.MutableRefObject<HTMLElement | null>
  ) => {
    navbarRef.current?.addEventListener("click", (ev) => {
      const link = ev.target as HTMLElement;
      const togglerBtn = navbarRef.current?.parentElement?.children[1];

      if (
        !link.classList.contains("navbar") ||
        !link.classList.contains("navbar-link")
      ) {
        navbarRef.current?.classList.remove("navbar-mobile-show");
        togglerBtn?.classList.remove("toggler-navbar-active");
      }
    });
  };

  useEffect(() => {
    handleClickNavlinks(navbarRef);
  }, []);

  return (
    <header className="header-bar">
      <div className="container flex justify-between items-center mx-auto px-3 lg:py-0">
        <Link href="/" className="bg-gray-900 px-4 rounded-full">
          <img src="./logo.png" alt="logo" className="w-24 object-cover" />
        </Link>
        <div className="toggler-navbar">
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
            className={`navbar-link ${route === "/" && "link-active"}`}
            href="/"
            id="/"
          >
            home
          </Link>
          <Link
            className={`navbar-link ${
              route.split("/")[1] === "portfolio" && "link-active"
            }`}
            href="/portfolio"
            id="portfolio"
          >
            portfolio
          </Link>
          <Link
            className={`navbar-link ${
              route.split("/")[1] === "contact" && "link-active"
            }`}
            href="/contact"
            id="contact"
          >
            contact
          </Link>
          <Link
            className={`navbar-link ${
              route.split("/")[1] === "news" && "link-active"
            }`}
            href="/news"
            id="news"
          >
            news
          </Link>
          <Link
            className="px-8 py-2 rounded-3xl bg-emerald-500 text-black hover:bg-gray-500 hover:text-emerald-400"
            href="https://www.upwork.com/freelancers/~01b20a553681d081b1"
            target="_blank"
            rel="noopener noreferrer"
          >
            hire me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
