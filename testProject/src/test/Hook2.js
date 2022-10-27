import React from "react";

const Hook2 = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black',
        }}
        onClick={() => {
          dispatch({ type: 'mark-student', payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: 'delete-student', payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Hook2;