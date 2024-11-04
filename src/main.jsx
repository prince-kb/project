import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createHashRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx';
import Home from './components/Home.jsx';
import HouseRent from './components/HouseRent.jsx';
import HouseSale from './components/HouseSale.jsx';

const router = createHashRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "",
                element : <Home />
            },
            {
                path : "contact",
                element : <Contact />
            },
            {
                path : "services",
                element : <Services />
            },
            {
                path : ":id",
                element : <div>Nothing here! Try routing using navbar</div>
            },
            {
                path : "/renthouse",
                element : <HouseRent/>
            },
            {
                path : "/salehouse",
                element : <HouseSale/>
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
