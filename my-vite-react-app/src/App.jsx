import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/navbar";
import Home from "./pages/Home/home";
import Doctors from "./pages/Doctors/doctors";
import Fees from "./pages/Fees/fees";
import Footer from "./components/Footer/footer";
import Testimonial from "./pages/Testimonial/testimonial";
import PatientForm from "./pages/PatientForm/PatientForm";
import BookAppointment from "./pages/BookAppointment/bookappointment";
import "./App.scss"

// layout to keep nav and footer loaed with the outlet being the pages
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
        path:"/PatientForm",
        element: <PatientForm/>
      },
      {
        path:"/Testimonial",
        element:<Testimonial/>
      },
      {
        path:"/BookAppointment",
        element:<BookAppointment/>
      },

    ]
}])
 

function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;

