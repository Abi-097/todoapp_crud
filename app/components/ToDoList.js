import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import EditTask from "./EditTask";
const ToDoList = () => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl ">
      <div className="my-4 flex justify-between gap-5 items-start">
        <div>
          <h1 className="card-title text-2xl">Shoes!</h1>
          <p>If a dog chews shoes whose sdsdsshoes doess he choose?</p>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          {/* <Link href={"/editTopic/123"}>
            <MdEditSquare />
          </Link> */}
          <EditTask />
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
