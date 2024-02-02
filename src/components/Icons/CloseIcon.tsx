import React from "react";

function CloseIcon({fill}:{fill:string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      className="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <path stroke={fill} strokeLinecap="round" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
}

export default CloseIcon;