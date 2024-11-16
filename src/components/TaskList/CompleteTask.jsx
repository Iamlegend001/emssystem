import React from "react";

const CompleteTask = () => {
  return (
    <div>
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-green-500 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-400 px-3 text-sm py-1 rounded"> High </h3>
          <h4 className="text-sm font-semibold">20 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
          Make a Youtube Video Daily
        </h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          eligendi officiis adipisci perferendis unde sequi!
        </p>
        <div className="mt-4 flex justify-center">
          <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105">
            Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
