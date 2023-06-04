import React from 'react'

const login = () => {
  return (
    <div className='h-screen '>
      <h1 className='text-4xl text-center'>Login</h1>
      <form action="">
        <input type="text" placeholder='Username' className='block mx-auto my-4 p-2 border-2 border-gray-400 rounded-md'/>
        <input type="password" placeholder='Password' className='block mx-auto my-4 p-2 border-2 border-gray-400 rounded-md'/>
        <input type="submit" value='Login' className='block mx-auto my-4 p-2 border-2 border-gray-400 rounded-md'/>
        
      </form>
    </div>
  )
}

export default login