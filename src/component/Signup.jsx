import React from 'react'

const Signup = () => {
  return (
    <div>
      <div>
      <h1 className="main-heading text-7xl font-bold">Sign up</h1>
      <div className="form">
        <form className="flex flex-col gap-5">
            <input className="input" type="text" placeholder="First Name" />
            <input className="input" type="text" placeholder="Last Name" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <button className=" bg-green-400 hover:bg-blue-400 text-white text-2xl font-semibold p-2 rounded-md ">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
