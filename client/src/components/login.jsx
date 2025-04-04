import React from 'react'

function login() {
  return (
    <div className='w-screen h-screen'>
        <img className='w-full h-full absolute z-[-999]'  src="../public/images/library.jpg" alt="" />
        <div className="w-[25vw] min-w-[300px] absolute right-15 top-50 backdrop-blur-md p-6 bg-zinc-100/10 shadow-lg rounded-lg border border-gray-200">
            <form action="" onSubmit={hadlesubmit}>
                <h1 className="text-xl text-white font-semibold text-gray-800 mb-2">Enter College ID</h1>
                <input
                    type="text"
                    placeholder="Enter your College ID"
                    className="w-full  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <h1 className="text-xl text-white font-semibold text-gray-800 mt-4 mb-2">Enter Password</h1>
                <input
                    type="password"
                    placeholder="Enter your Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <button className="w-full mt-6 bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default login
