import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full ">
      <div className="max-w-2xl p-5 text-center lg:p-0 ">
        <h1 class="py-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-fuchsia-500 hover:bg-gradient-to-l drop-shadow-lg   shadow-green-500/50  dark:shadow-green-800/80">
          NFT TOOLS <span class="text-xs">by Dcryptoniun</span>
        </h1>
        <p class="text-slate-100 text-center py-5  text-lg">
          Simple no code tools to update NFT metadata file with ease
        </p>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <button
            id="button-1"
            onclick="window.location.href='create-pre-reveal-json.html'"
            class=" px-4 py-3  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-sm  text-center mr-2 mb-2"
          >
            Create Pre-Reavel json
          </button>
          <button
            id="button-2"
            onclick="window.location.href='update-metadata.html'"
            class=" px-4 py-3  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-sm  text-center mr-2 mb-2"
          >
            Update NFT Metadata
          </button>
          <button
            id="button-3"
            onclick="window.location.href='edit-extenstion.html'"
            class=" px-4 py-3  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-sm  text-center mr-2 mb-2"
          >
            Add/Remove extenstion
          </button>
        </div>
      </div>
    </main>
  );
}
