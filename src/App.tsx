import React, { ReactNode } from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./routes";
import setAuthToken from "utils/setAuthToken";
import useStore from "useStore";
import { loadUser } from "api/user";
import { Notifications } from "react-push-notification";
import { XLoadingProvider, useXLoading } from "contexts/XLoadingContext";
import XLoading from "components/xc/XLoading";

function Main({ children }: { children: ReactNode }) {
  const { update } = useStore();
  const { startLoading, stopLoading } = useXLoading();

  React.useEffect(() => {
    if (window.location.pathname !== "/login") {
      startLoading();
      if (localStorage.token) {
        setAuthToken(localStorage.token);
        update({
          isAuthenticated: true
        });
        stopLoading();
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
    stopLoading();
  };

  return (
    <>
      <XLoading />
      <Notifications position="top-right" />
      {children}
    </>
  );
}

function App() {
  return (
    <React.Fragment>
      <XLoadingProvider>
        <Main>
          <RouterProvider router={routers()} />
        </Main>
      </XLoadingProvider>
    </React.Fragment>
  );
}

export default App;
