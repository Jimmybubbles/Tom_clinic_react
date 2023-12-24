import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/navbar";
import Home from "./pages/home";
import Doctors from "./pages/Doctors";
import Fees from "./pages/Fees";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/footer";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Doctors",
        element: <Doctors/>
      },
      {
        path:"/Fees",
        element: <Fees/>
      },
      {
        path:"/Contact",
        element: <Contact/>
      },
    ]
}])
 

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}



export default App;

