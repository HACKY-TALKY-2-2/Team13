import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import ManageStore from "../pages/manageStore";
import OwnerLogin from "../pages/ownerLogin";
import OwnerRegister from "../pages/ownerRegister";
import OwnerWelcome from "../pages/ownerWelcome/ownerWelcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/owner-register",
    element: <OwnerRegister />,
  },
  {
    path: "/owner-login",
    element: <OwnerLogin />,
  },
  {
    path: "/owner-welcome",
    element: <OwnerWelcome />,
  },
  {
    path: "/manage-store",
    element: <ManageStore />,
  },
]);

export default router;
