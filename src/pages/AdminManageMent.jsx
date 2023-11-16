import React from "react";

const AdminManageMent = () => {
  return (
    <div>
      <h1 className="text-primary text-center mt-[2rem] text-3xl font-bold mb-[3rem]">
        Admin Management
      </h1>

      <form
        className="w-[90%] border border-gray-300 mx-auto md:w-[50%] p-5 flex flex-col gap-3"
        action="">
        <div className="flex gap-2 flex-col">
          <label htmlFor="username" className="text-black font-bold ">
            Username:
          </label>
          <input
            type="text"
            className="w-full h-[50px] border-2 rounded border-gray-300 px-2"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="password" className="text-black font-bold ">
            Password:
          </label>
          <input
            type="text"
            className="w-full h-[50px] border-2 rounded border-gray-300 px-2"
          />
        </div>
        <button className="w-full py-2 bg-primary text-white font-bold rounded">
          Create User
        </button>
      </form>
      <div
        className="w-[90%] mt-[4rem] border border-gray-300 mx-auto md:w-[50%] p-5 flex flex-col gap-3"
        action="">
        <h1>Admin Accounts</h1>
        <div className="gap-3 w-[50%] flex items-center">
          <button className="flex-1 py-2 bg-primary text-white font-bold rounded">
            User1
          </button>
          <button className="flex-1 py-2 bg-red-700 text-white font-bold rounded">
            Delete
          </button>
        </div>
        <div className="gap-3 w-[50%] flex items-center">
          <button className="flex-1 py-2 bg-primary text-white font-bold rounded">
            User2
          </button>
          <button className="flex-1 py-2 bg-red-700 text-white font-bold rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminManageMent;
