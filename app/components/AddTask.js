"use client";
import { FaPlus } from "react-icons/fa";
import CustomButton from "./Button";
const AddTask = () => {
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
            <input type="text" className="grow" placeholder="Daisy" />
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
          <CustomButton className="btn btn-success">Add Task</CustomButton>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddTask;
