import React, { useState } from "react";
import { qna } from "../data"; // Assuming you have imported your Q&A data properly
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Qna = () => {
  const [clicked, setClicked] = useState(null);

  function qnaClicked(id){
    
    if (clicked === id) {
      setClicked(null);
    } else {
      setClicked(id);
    }
    console.log(id);
  }

  return (
    <div className="text-white mt-[100px] lg:w-7/12 w-11/12 mx-auto">
      {qna.map((elem, index) => (
        <details
          className=" bg-red-200 my-[20px] flex items-center justify-center"
          key={index}
        >
          <summary
            onClick={() => qnaClicked(elem.id)}
            className=" text-3xl py-[28px] px-4 flex items-center justify-between w-full"
          >
            {elem.qn}{" "}
            {clicked === elem.id ? (
              <RxCross1 />
            ) : (
              <AiOutlinePlus className="text-4xl" />
            )}{" "}
          </summary>
          {clicked === elem.id && (
            <p className="px-[10px] text-2xl font-bold py-[20px] bg-red-100">
              {elem.ans}
            </p>
          )}
        </details>
      ))}
    </div>
  );
};

export default Qna;
