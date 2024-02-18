// "use client";
// import Edits from "@/app/components/Edits";
// import axios from "axios";
// import { useState, useEffect } from "react";
// const EditTask = ({ id }) => {
//   const [topic, setTopic] = useState(null);
//   // const id = params;
//   console.log("id", id);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/api/topics/${id}`, {
//           headers: {
//             "Cache-Control": "no-store",
//           },
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch");
//         }

//         const { topic } = await res.json();
//         setTopic(topic);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (!topic) {
//     return null;
//   }
//   return (
//     <div>
//       <Edits
//         title={topic.title}
//         description={topic.description}
//         id={topic._id}
//       />
//     </div>
//   );
// };
// export default EditTask;
