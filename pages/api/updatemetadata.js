// import fs from "fs";
// import path from "path";

// export default function handler(req, res) {
//   const { folderPath } = req.body;

//   const files = fs.readdirSync(folderPath);

//   files.forEach((file) => {
//     const filePath = path.join(folderPath, file);
//     const data = JSON.parse(fs.readFileSync(filePath));

//     delete data.generator;
//     data.description = "This is a new description";
//     data.image = data.image.replace("REPLACE-THIS-WITH-YOUR-URL", "new_CID");
//     data.compiler = data.compiler.replace("X", "Y");
//     data.uid = path.parse(file).name;
//     data.name = `bapes #${data.uid}`;

//     fs.writeFileSync(filePath, JSON.stringify(data));
//   });

//   res.status(200).end();
// }
import React from "react";

function updatemetadata() {
  return <div>updatemetadata</div>;
}

export default updatemetadata;
