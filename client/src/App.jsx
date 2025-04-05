import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/login';
import Register from './components/user.register';
import Home from './components/home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/Home",
    element: <Home />
  }
]);

function App() {



  return (
    <RouterProvider router={router} />
  );
}

export default App;
