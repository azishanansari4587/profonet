import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import GetStarted from './GetStarted';
import Services from './Services';
import Solutions from './Solutions';



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
