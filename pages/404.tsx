import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import notfoundImage from "../public/404-not-found.svg";

function NotFounded() {
  return (
    <>
      <Head>
        <title>404 Page Not Found</title>
      </Head>
      <section className="w-full h-screen flex flex-col justify-center items-center z-10">
        <div className="max-w-full  h-1/3">
          <Image
            src={notfoundImage}
            alt={"404-not-found.svg"}
            className="w-full object-cover"
          />
        </div>
        <div className="w-11/12 lg:w-1/3 h-1/2 flex justify-center items-center flex-col gap-4 text-center">
          <p className="text-white capitalize">
            Oops &lsquo; this page isn&apos;t available or maybe Under
            construction and development .
          </p>
          <Link href={"/"} className="btn">
            back to home
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFounded;
