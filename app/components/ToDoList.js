"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RemoveBtn from "./RemoveBtn";
import EditTask from "./EditTask";

const ToDoList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/topics", {
          headers: {
            "Cache-Control": "no-store",
          },
        });

        setTopics(response.data.topics);
      } catch (error) {
        console.log("Error Loading:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {topics.map((topic, index) => (
        <div
          key={index}
          className="card card-compact w-full bg-base-100 shadow-xl "
        >
          <div className="my-4 flex justify-between gap-5 items-start">
            <div>
              <h1 className="card-title text-2xl">{topic.title}</h1>
              <p>{topic.description}</p>
            </div>
            <div className="flex gap-2">
              <RemoveBtn />
              <EditTask id={topic._id} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ToDoList;
