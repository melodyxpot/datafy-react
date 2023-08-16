import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "pages/public";
import _ROUTERS from "constants/menu.constant";
import useStore from "useStore";
import PrivateLayout from "pages/private";
import ChatField from "pages/private/chat-field";
import Login from "pages/public/login";
import Home from "pages/public/home";
import PrivateHome from "pages/private/home";

const sharedRouters: never[] = [];

const publicRouters = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: _ROUTERS.home,
        element: <Home />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  {
    path: "*",
    element: <></>
  }
];

const privateRouters = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/c/:convers_id",
        element: <ChatField />
      },
      {
        path: "/",
        element: <PrivateHome />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  {
    path: "*",
    element: <></>
  }
];

const routers = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useStore();

  return createBrowserRouter([
    ...sharedRouters,
    ...(user !== null ? privateRouters : publicRouters)
  ]);
};

export default routers;
