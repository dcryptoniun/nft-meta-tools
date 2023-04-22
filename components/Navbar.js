import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full shadow-xl ">
      <nav className="flex flex-col items-center justify-between w-full px-4 py-3 sm:flex-row  h-fit">
        <div className="flex items-center justify-start gap-4">
          <Link href="/" className="shadow hover:bg-black/20 rounded-xl">
            <Image
              height="50"
              alt="logo-img"
              src="/images/neobinss.png"
              width="50"
            />
          </Link>
          <iframe
            src="https://github.com/sponsors/dcryptoniun/button"
            title="Sponsor dcryptoniun"
            height="32"
            width="114"
            className="shadow border-1 rounded-xl hover:bg-black/20"
          ></iframe>
        </div>
        <div className="flex flex-row gap-8">
          <Link
            href="/"
            className="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </Link>
          <Link
            href="/create-pre-reveal-json"
            className="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            New PreReveal
          </Link>
          <Link
            href="/update-metadata"
            className="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            Update Metadata
          </Link>
          <Link
            href="/edit-extenstion"
            className="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            a/r ext
          </Link>
          <Link
            href="https://github.com/dcryptoniun/updatenftdata/"
            target="_blank"
            rel="noopener"
            className="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            github
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
