import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
/* import Login from "./pages/Login";
import Signup from "./pages/Signup"; */
import JoinWaitlist from "./pages/JoinWaitlist";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./constants/constants_homepage";

export const App = createBrowserRouter([
  {
    path: ROUTES.home.path,
    element: <Home />,
  },
  /* {
    path: ROUTES.login.path,
    element: <Login />,
  },
  {
    path: ROUTES.signup.path,
    element: <Signup />,
  }, */
  {
    path: ROUTES.waitlist.path,
    element: <JoinWaitlist />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
