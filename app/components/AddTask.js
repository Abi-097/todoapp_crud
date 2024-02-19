"use client";
import { FaPlus } from "react-icons/fa";
import CustomButton from "./Button";
import { useState } from "react";
import axios from "axios";
const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }
    try {
      const res = await axios.post(
        `https://todoapp-crud.vercel.app/api/topics`,
        {
          title: title,
          description: description,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log("Task added successfully:", res.data);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);

      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
      setFailed(true);
      setTimeout(() => setFailed(false), 2000);
    }
  };
  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        {" "}
        Add new task <FaPlus className="ml-2" size={13} />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input
              type="text"
              className="grow"
              placeholder="Daisy"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <br />
          <input
            type="text"
            placeholder="Content"
            className="input input-bordered w-full max-w-xs"
            style={{ width: "100%", maxWidth: "none" }}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <br />
          <br />
          <CustomButton className="btn btn-success" onClick={handleSubmit}>
            Add Task
          </CustomButton>
          {failed && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! Task failed successfully.</span>
            </div>
          )}
          {success && (
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your task has been added successfully!</span>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddTask;
