import React from "react";

const ContainedButton = (props) => {
  return (
    <button className="text-sm text-gray-800 w-[200px] h-[30px] flex items-center justify-center bg-blue-600">
      {props.label}
    </button>
  );
};

export default ContainedButton;
