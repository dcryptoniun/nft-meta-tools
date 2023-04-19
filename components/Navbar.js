import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full shadow-xl ">
      <nav class="flex flex-col items-center justify-between w-full px-4 py-3 sm:flex-row  h-fit">
        <div class="flex items-center justify-start gap-4">
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
        <div class="flex flex-row gap-8">
          {/* <Link
            href="/"
            class="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            Home
          </Link> */}
          <Link
            href="/create-pre-reveal-json"
            class="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            New PreReveal
          </Link>
          <Link
            href="/update-metadata"
            class="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            Update Metadata
          </Link>
          <Link
            href="/edit-extenstion"
            class="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            a/r ext
          </Link>
          <Link
            href="https://github.com/dcryptoniun/updatenftdata/"
            target="_blank"
            rel="noopener"
            class="flex items-center p-2 text-teal-300  rounded-xl hover:bg-black/20"
          >
            github
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
