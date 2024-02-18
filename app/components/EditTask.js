"use client";

import CustomButton from "./Button";
import { MdEditSquare } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

const EditTask = ({ id }) => {
  const [topicData, setTopicData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/topics/${id}`, {
          headers: {
            "Cache-Control": "no-store",
          },
        });
        console.log("Response:", res.data.topic._id);
        if (!res.data || !res.data.topic) {
          throw new Error("No data received from server");
        }

        const { topic } = res.data;

        setTopicData({
          title: topic?.title,
          description: topic?.description,
        });
      } catch (error) {
        console.error("Fetch Error:", error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <MdEditSquare
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      />
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box">
          <div>
            EditTask component for task with ID: value={topicData.title}
          </div>

          <label className="input input-bordered flex items-center gap-2">
            Title
            <input
              type="text"
              className="grow"
              value={topicData.title}
              onChange={(e) =>
                setTopicData({ ...topicData, title: e.target.value })
              }
            />
          </label>
          <br />
          <input
            type="text"
            placeholder="Content"
            className="input input-bordered w-full max-w-xs"
            style={{ width: "100%", maxWidth: "none" }}
            value={topicData.description}
            onChange={(e) =>
              setTopicData({ ...topicData, description: e.target.value })
            } //
          />
          <br />
          <br />
          <CustomButton className="btn btn-warning">Update Task</CustomButton>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default EditTask;
