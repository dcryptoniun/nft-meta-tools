// import fs from "fs";
// import path from "path";

// export default function handler(req, res) {
//   try {
//     const dirPath = path.join(process.cwd(), "data");
//     const files = fs.readdirSync(dirPath);

//     files.forEach((file) => {
//       if (file.endsWith(".json")) {
//         const filePath = path.join(dirPath, file);
//         const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

//         // Update the data as needed
//         data.name = " Doe";
//         data.age = 50;
//         data.email = "jane@example.com";

//         // Write the updated data back to the file
//         fs.writeFileSync(filePath, JSON.stringify(data));
//       }
//     });

//     res.status(200).send("Files updated successfully.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error updating files.");
//   }
// }

//
//👍working pages/api/update-file.js
// import fs from "fs";
// import path from "path";

// export default function handler(req, res) {
//   try {
//     const dirPath = path.join(process.cwd(), "data");
//     const files = fs.readdirSync(dirPath);

//     files.forEach((file) => {
//       if (file.endsWith(".json")) {
//         const filePath = path.join(dirPath, file);
//         const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

//         // Update the data with user input
//         if (req.body.name) {
//           data.name = req.body.name;
//         }
//         if (req.body.age) {
//           data.age = req.body.age;
//         }
//         if (req.body.email) {
//           data.email = req.body.email;
//         }

//         // Write the updated data back to the file
//         fs.writeFileSync(filePath, JSON.stringify(data));
//       }
//     });

//     res.status(200).send("Files updated successfully.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error updating files.");
//   }
// }

//#3
// import fs from "fs";
// import path from "path";

// export default function handler(req, res) {
//   try {
//     const { folderName, name, age, email } = req.query;

//     const absolutePath = path.join(process.cwd(), folderName);
//     const data = JSON.parse(fs.readFileSync(absolutePath, "utf8"));

//     // Update the data as needed
//     data.name = name || data.name;
//     data.age = age || data.age;
//     data.email = email || data.email;

//     // Write the updated data back to the file
//     fs.writeFileSync(absolutePath, JSON.stringify(data));

//     res.status(200).send("File updated successfully.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error updating file.");
//   }
// }

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const os = require("os");
    const path = require("path");
    const dirPath = path.join(os.homedir(), "Desktop/metadata");
    // const dirPath = path.join(process.cwd(), "data");
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      if (file.endsWith(".json")) {
        const filePath = path.join(dirPath, file);
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

        // Update the data with user input
        if (req.body.name) {
          data.name = req.body.name;
        }
        if (req.body.age) {
          data.age = req.body.age;
        }
        if (req.body.email) {
          data.email = req.body.email;
        }

        // Write the updated data back to the file
        fs.writeFileSync(filePath, JSON.stringify(data));
      }
    });

    res.status(200).send("Files updated successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating files.");
  }
}
