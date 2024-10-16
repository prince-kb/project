import Navbar from './components/Navbar'
import Home from './components/Home'
import HousePage from './components/HousePage'

function App() {

  return (
    <div className=''>
      <Navbar/>
      <div className='flex justify-center items-center mt-10'>
      <Home/>
      <HousePage/>
    </div>
    </div>
  )
}

export default App
