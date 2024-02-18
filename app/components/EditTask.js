"use client";
import { FaPlus } from "react-icons/fa";
import CustomButton from "./Button";
import { MdEditSquare } from "react-icons/md";
import { useEffect } from "react";
const EditTask = ({ id }) => {
  return (
    <div>
      <MdEditSquare
        onClick={() => document.getElementById("my_modal_3").showModal()}
      />

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <div>EditTask component for task with ID: {id}</div>
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input type="text" className="grow" placeholder="" />
          </label>
          <br />
          <input
            type="text"
            placeholder="Content"
            className="input input-bordered w-full max-w-xs"
            style={{ width: "100%", maxWidth: "none" }}
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
