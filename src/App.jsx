import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
