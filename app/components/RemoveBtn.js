import { ImBin2 } from "react-icons/im";
import axios from "axios";

const RemoveBtn = ({ id, onDelete }) => {
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      try {
        const res = await axios.delete(
          `https://todoapp-crud.vercel.app/api/topics?id=${id}`
        );
        console.log("Topic removed successfully:", res.data);
        onDelete(id);
      } catch (error) {
        console.error("Error removing topic:", error);
      }
    }
  };

  return (
    <div>
      <button className="text-red-400" onClick={removeTopic}>
        <ImBin2 />
      </button>
    </div>
  );
};

export default RemoveBtn;
