// import { useState } from "react";
// import { useRouter } from "next/router";
// import path from "path";
// const fs = require("fs");

// const UpdateMetadata = () => {
//   const [folder, setFolder] = useState(null);
//   const router = useRouter();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!folder) {
//       console.error("No folder selected");
//       return;
//     }

//     const files = await fs.readdir(folder);

//     for (const file of files) {
//       const filePath = path.join(folder, file);
//       const data = JSON.parse(await fs.readFile(filePath, "utf-8"));

//       delete data.generator;
//       data.description = "This is a new description";
//       data.image = data.image.replace("REPLACE-THIS-WITH-YOUR-URL", "new_CID");
//       data.compiler = data.compiler.replace("X", "Y");
//       data.uid = path.parse(file).name;
//       data.name = `bapes #${data.uid}`;

//       await fs.writeFile(filePath, JSON.stringify(data));
//     }

//     router.push("/");
//   };

//   const handleFolderSelect = (event) => {
//     const fileList = event.target.files;
//     if (fileList.length > 0) {
//       const directory = fileList[0].webkitRelativePath.split("/")[0];
//       const folderPath = `${fileList[0].webkitRelativePath.replace(
//         directory,
//         ""
//       )}`;
//       setFolder(folderPath);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="mb-4 text-2xl font-bold">Update Metadata</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block mb-2 font-bold text-gray-700"
//             htmlFor="folder"
//           >
//             Folder
//           </label>
//           <input
//             className="hidden"
//             id="folder"
//             type="file"
//             webkitdirectory="true"
//             onChange={handleFolderSelect}
//             required
//           />
//           <button
//             className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//             type="button"
//             onClick={() => document.getElementById("folder").click()}
//           >
//             Select Folder
//           </button>
//           {folder && <span className="ml-4">{folder}</span>}
//         </div>
//         <button
//           className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//           type="submit"
//           disabled={!folder}
//         >
//           Update Metadata
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateMetadata;
import React from 'react'


export default function updatemetadata() {
  return (
    <div>update-metadata</div>
  )
}
