import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "@/components/Navbar/navbar";

const router = createBrowserRouter([
  {
    path:"/",
    element:<div>Hello World</div>
  },
  {
    path:"/test",
    element:<div>this is the test route</div>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;