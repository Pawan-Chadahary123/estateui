import HomePage from "./routes/homePage/homePage.jsx"
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import ListPage from "./routes/listPage/listPage.jsx"
import Layout from "./routes/layout/layout.jsx"
import SinglePage from "./routes/singlePage/singlePage.jsx";
import Login from "./routes/login/login.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children :[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage />
        },
        {
          path:"/:id",
          element:<SinglePage />
        },
        {
          path:"/login",
          element:<Login />
        },
      ]
    },

   
  ])
  return (
    
    <RouterProvider router = {router} />
  );
}

export default App