import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar/>
      <div className='flex justify-center items-center mt-10'>
      <h1 className='text-4xl text-red-800 font-semibold' >Let's start a new project</h1>
    </div>
    </div>
  )
}

export default App
