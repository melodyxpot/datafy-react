import React from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./routes";
import setAuthToken from "utils/setAuthToken";
import useStore from "useStore";
import { loadUser } from "api/user";

function App() {
  const { update } = useStore();

  React.useEffect(() => {
    if (window.location.pathname !== "/login") {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
        // update({
        //   isAuthenticated: true
        // });
      }
      loadtoken();
    }
  }, []);

  const loadtoken = async () => {
    const user = await loadUser();
    update({
      user: {
        user: user,
        token: localStorage.token
      }
    });
  };

  return (
    <React.Fragment>
      <RouterProvider router={routers()} />
    </React.Fragment>
  );
}

export default App;
