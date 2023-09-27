import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

const Duties = ({ duties }) => {
  return (
    <>
      {duties.map((duty, index) => {
        const id = uuidv4();
        return (
          <div key={id} className='job-desc'>
            <FaAngleDoubleRight  className='job-icon'/>
            <p>{duty}</p>
            <h3>{duty.title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Duties;
