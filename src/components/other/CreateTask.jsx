import React from 'react';

const CreateTask = () => {
  return (
    <div className="bg-gray-900 p-8 mt-5 rounded-lg shadow-xl">
      <form className="flex flex-wrap gap-6 items-start justify-between">
        {/* Left Side */}
        <div className="w-full sm:w-1/2 space-y-4">
          <div>
            <h3 className="text-sm text-gray-400 mb-2">Task Title</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-blue-500 transition duration-300"
              type="text"
              placeholder="Enter task title"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-2">Date</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 focus:border-blue-500 transition duration-300"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-2">Assign to</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-blue-500 transition duration-300"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-2">Category</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-blue-500 transition duration-300"
              type="text"
              placeholder="Design, Product..."
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full sm:w-2/5">
          <div>
            <h3 className="text-sm text-gray-400 mb-2">Description</h3>
            <textarea
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-blue-500 transition duration-300 resize-none"
              cols="30"
              rows="8"
              placeholder="Describe the task..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center sm:w-auto sm:ml-auto mt-6 sm:mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
