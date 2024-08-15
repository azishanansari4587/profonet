import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import GetStarted from './pages/GetStarted';
import Services from './pages/Services';
import Solutions from './pages/Solutions';



function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"services",
      element:<Services/>
    },
    {
      path:"solutions",
      element:<Solutions/>
    },
    {
      path:"getStarted",
      element:<GetStarted/>
    },
  ]);

  return (
    <>
      <RouterProvider router={route}></RouterProvider>   
    </>
  )
}

export default App
