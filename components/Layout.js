import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="inset-0 flex flex-col justify-between h-screen bg-gradient-to-r from-zinc-950 to-slate-800">
      {/* <div>
        <Navbar />
      </div> */}

      <div className="h-full">{children}</div>
      <div className="bg-gradient-to-r from-zinc-950 to-slate-800">
        <Footer />
      </div>
    </div>
  );
}
