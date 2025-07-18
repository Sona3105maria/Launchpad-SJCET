import React from "react";

const StartUpCard = ({ logo = "LOGO" }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md w-full max-w-md mx-auto flex flex-col items-center">
      <div className="bg-[#e8fae8] rounded-3xl w-full h-64 mt-0"></div>
      <div className="w-full flex justify-center">
        <div className="bg-white rounded-2xl border border-gray-300 w-11/12 py-6 mt-4 mb-4 flex items-center justify-center text-2xl text-black shadow-sm">
          {logo}
        </div>
      </div>
    </div>
  );
};

export default StartUpCard;
