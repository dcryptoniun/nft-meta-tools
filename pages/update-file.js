// import { useState } from "react";

// export default function UpdateFile() {
//   const [message, setMessage] = useState("");
//   const [data, setData] = useState(null);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const response = await fetch("/api/update-file", { method: "POST" });
//     const text = await response.text();
//     setMessage(text);

//     // Fetch the updated data and display it
//     const dataResponse = await fetch("/api/get-data");
//     const newData = await dataResponse.json();
//     setData(newData);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center gap-8 text-white">
//       <h1>Update File Example</h1>
//       <form onSubmit={handleSubmit}>
//         <button className="p-2 bg-teal-700 border" type="submit">
//           Update File
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//       {data && (
//         <div>
//           <h2>Updated Data:</h2>
//           <p>Name: {data.name}</p>
//           <p>Age: {data.age}</p>
//           <p>Email: {data.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

//#2
import { useState } from "react";

export default function UpdateFile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    // Send the updated data to the server
    const response = await fetch("/api/update-file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    });
    const text = await response.text();
    setMessage(text);

    // Fetch the updated data and display it
    const dataResponse = await fetch("/api/get-data");
    const newData = await dataResponse.json();
    setData(newData);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-slate-300">
      <h1>Update File Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="p-2 bg-teal-700 border" type="submit">
          Update File
        </button>
      </form>
      {message && <p>{message}</p>}
      {data && (
        <div>
          <h2>Updated Data:</h2>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

//#3
//pages/update-file.js
// import { useState } from "react";

// export default function UpdateFile() {
//   const [message, setMessage] = useState("");
//   const [data, setData] = useState(null);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [folderPath, setFolderPath] = useState("");

//   async function handleSubmit(e) {
//     console.log("handleSubmit called");
//     e.preventDefault();

//     console.log("folderPath:", folderPath);
//     const response = await fetch("/api/update-file", {
//       method: "POST",
//       body: JSON.stringify({ folderPath, name, age, email }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const text = await response.text();
//     setMessage(text);

//     // Fetch the updated data and display it
//     const dataResponse = await fetch("/api/get-data");
//     const newData = await dataResponse.json();
//     setData(newData);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center gap-8 text-red-900">
//       <h1>Update File Example</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="folderPath">Folder Path:</label>
//           <input
//             id="folderPath"
//             type="text"
//             value={folderPath}
//             onChange={(e) => setFolderPath(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             id="age"
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button className="p-2 bg-teal-700 border" type="submit">
//           Update File
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//       {data && (
//         <div>
//           <h2>Updated Data:</h2>
//           <p>Name: {data.name}</p>
//           <p>Age: {data.age}</p>
//           <p>Email: {data.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }
