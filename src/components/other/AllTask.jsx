import React from 'react'

const AllTask = () => {
  return (
    <div id='tasklist' className="bg-[#1c1c1c] p-5 rounded mt-5 h-48 overflow-auto">
      {/* Task 1 */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 py-3 px-5 flex justify-between items-center rounded-lg mb-4 hover:scale-105 transition-transform duration-300">
        <h2 className="text-white font-semibold text-lg">Arkaprava</h2>
        <h3 className="text-white text-md">Make a UI Design</h3>
        <h5 className="text-white text-sm">Status</h5>
      </div>

      {/* Task 2 */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 py-3 px-5 flex justify-between items-center rounded-lg mb-4 hover:scale-105 transition-transform duration-300">
        <h2 className="text-white font-semibold text-lg">John Doe</h2>
        <h3 className="text-white text-md">Develop API</h3>
        <h5 className="text-white text-sm">Status</h5>
      </div>

      {/* Task 3 */}
      <div className="bg-gradient-to-r from-green-500 to-lime-500 py-3 px-5 flex justify-between items-center rounded-lg mb-4 hover:scale-105 transition-transform duration-300">
        <h2 className="text-white font-semibold text-lg">Jane Smith</h2>
        <h3 className="text-white text-md">Fix Bugs</h3>
        <h5 className="text-white text-sm">Status</h5>
      </div>

      {/* Task 4 */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-5 flex justify-between items-center rounded-lg mb-4 hover:scale-105 transition-transform duration-300">
        <h2 className="text-white font-semibold text-lg">Alex Green</h2>
        <h3 className="text-white text-md">Design Mockups</h3>
        <h5 className="text-white text-sm">Status</h5>
      </div>

      {/* Task 5 */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 py-3 px-5 flex justify-between items-center rounded-lg mb-4 hover:scale-105 transition-transform duration-300">
        <h2 className="text-white font-semibold text-lg">Max Stone</h2>
        <h3 className="text-white text-md">SEO Optimization</h3>
        <h5 className="text-white text-sm">Status</h5>
      </div>

      {/* Task 6 */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-3 px-5 flex justify-between items-center rounded-lg mb-4 hover:scale-105 transition-transform duration-300">
        <h2 className="text-white font-semibold text-lg">Mia Brooks</h2>
        <h3 className="text-white text-md">Create Logo</h3>
        <h5 className="text-white text-sm">Status</h5>
      </div>

      {/* Task 7 */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-5 flex justify-between items-center rounded-lg mb-4 hover:scale-105 transition-transform duration-300">
        <h2 className="text-white font-semibold text-lg">Leo Moon</h2>
        <h3 className="text-white text-md">Content Writing</h3>
        <h5 className="text-white text-sm">Status</h5>
      </div>
    </div>
  )
}

export default AllTask
