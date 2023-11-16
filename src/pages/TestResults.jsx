import React from "react";

const TestResults = () => {
  return (
    <div>
      <h1 className="text-primary text-center mt-[2rem] text-3xl font-bold mb-[3rem]">
        Test Results
      </h1>
      <div className="flex w-[80%]  border-2 md:w-[50%] mx-auto h-[40px] md:h-[50px]">
        <input className="flex-1 h-full px-2 outline-none" type="text" />
        <button className="bg-primary text-white h-full w-[25%]">Search</button>
      </div>

      <div className="flex w-[95%] mx-auto mt-[3rem] border border-gray-300 flex-col px-4 py-3 shadow-md">
        <h1 className="text-2xl mb-2">CSC102</h1>
        <p className="text-base mb-3">Computer Programming</p>
        <div className="flex  justify-end">
          <button className="py-2 px-4 bg-primary text-white">
            View Results
          </button>
        </div>
      </div>
      <div className="flex mt-[3rem] w-[95%] mx-auto  border border-gray-300 flex-col px-4 py-3 shadow-md">
        <h1 className="text-2xl mb-2">CSC102</h1>
        <p className="text-base mb-3">Computer Programming</p>
        <div className="flex  justify-end">
          <button className="py-2 px-4 bg-primary text-white">
            View Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
