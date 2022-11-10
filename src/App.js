import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Rivew from "./Pages/Myreview/Rivew";
import Regester from "./Pages/Regester/Regester";
import Services from "./Pages/Services/Services";
import Addservice from "./Pages/Addservice/Addserivce";
import Carddetils from "./Pages/Services/Carddetils";
import Updetrivew from "./Pages/Myreview/Updetrivew";
import Privateroute from "./Privateroute/Privateroute";
import { Toaster } from "react-hot-toast";
import PrivetLogin from "./Privateroute/PrivetLogin";
import Error from "./Pages/Error/Error"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/review",
          element: (
            <Privateroute>
              <Rivew></Rivew>
            </Privateroute>
          ),
        },
        {
          path: "/reviews/:id",
          element: <Updetrivew></Updetrivew>,
          loader: ({ params }) =>
            fetch(`https://plumbing-server.vercel.app/reviewss/${params.id}`),
        },
        {
          path: "/addservice",
          element: (
            <Privateroute>
              <Addservice></Addservice>
            </Privateroute>
          ),
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: (
            <PrivetLogin>
              <Login></Login>
            </PrivetLogin>
          ),
        },
        {
          path: "/regester",
          element: (
            <PrivetLogin>
              <Regester></Regester>
            </PrivetLogin>
          ),
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/services/:id",
          element: <Carddetils></Carddetils>,
          loader: ({ params }) =>
            fetch(`https://plumbing-server.vercel.app/services/${params.id}`),
        },
      ],
    },
    {path:"*", element:<Error></Error>}
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
