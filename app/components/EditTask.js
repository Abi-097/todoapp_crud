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
  const [updateStatus, setUpdateStatus] = useState(null);
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

  const handleTitleChange = (e) => {
    setTopicData({ ...topicData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setTopicData({ ...topicData, description: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/topics/${id}`,
        {
          title: topicData.title,
          description: topicData.description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Update Response:", res.data);
      setUpdateStatus("success");
      // Handle success or error
    } catch (error) {
      console.error("Update Error:", error.message);
      setUpdateStatus("error");
      // Handle error
    }
  };
  return (
    <div>
      <MdEditSquare
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      />
      <div> The ID is {id}</div>
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box">
          <div> The ID is {id}</div>
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input
              type="text"
              className="grow"
              value={topicData.title}
              onChange={handleTitleChange}
            />
          </label>
          <br />
          <input
            type="text"
            placeholder="Content"
            className="input input-bordered w-full max-w-xs"
            style={{ width: "100%", maxWidth: "none" }}
            value={topicData.description}
            onChange={handleDescriptionChange}
          />
          <br />
          <br />
          {updateStatus === "success" && (
            <div role="alert" className="alert alert-success">
              {" "}
              <span>Your task has been updated successfully!</span>
            </div>
          )}

          {updateStatus === "error" && (
            <div div role="alert" className="alert alert-error">
              {" "}
              <span>Something went wrong!</span>
            </div>
          )}
          <CustomButton className="btn btn-warning" onClick={handleUpdate}>
            Update Task
          </CustomButton>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default EditTask;
