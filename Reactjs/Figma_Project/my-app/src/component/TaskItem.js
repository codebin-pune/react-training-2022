import React, { useState } from "react";
import Image from "./Image";
import TaskDesc from "./TaskDesc";
import { FaThumbsUp } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";

const TaskItem = ({ task }) => {
  const [urlText, setUrltext] = useState(false);
  const [like, setLike] = useState(0);
  const [save, setSave] = useState({ color: "black" });
  const [state, setState] = useState({ color: "blue" });

  //   console.log(urlText);
  const handller = () => {
    setState({
      color: "red",
    });
     if(like === 0) { 
         return setLike(1)
        }
        else{ 
            setLike(0)};
  };

  const saveButton = () => {
    return setSave({
      color: "pink",
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Image style={{ innerWidth: "10", innerHeight: 10 }} img={task.image} />
      <p style={{ marginLeft: 50 }}>
        <a  onClick={() => setUrltext(!urlText)}>{task.category}</a>
      </p>

      <div>
        {urlText === true ? (
          <div style={{ display: "inline-block", marginLeft: 50 }}>
            <TaskDesc textDesc={task.description} />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FaThumbsUp
                color={state.color}
                style={{ marginLeft: 100 }}
                onClick={() => handller()}
              />
              <p style={{}}>{like}</p>
              <IoBookmarkSharp
                color={save.color}
                onClick={() => saveButton()}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TaskItem;
