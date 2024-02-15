import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1 ml-6">
            <a className="btn btn-ghost text-xl"><strong> Movies Marker</strong></a>
        </div>
        <div className="">
            <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-50 w-50 mr-6"  />
            </div>
        </div>
    </div>
  )
}

export default Navbar