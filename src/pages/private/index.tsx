import React from "react";
import { Main, PrivateLayoutContainer } from "./style";
import { Outlet } from "react-router-dom";
import {
  PrivateLayoutContextConsumer,
  PrivateLayoutContextProvider
} from "contexts/PrivateLayoutContext";

const PrivateLayout = () => {
  return (
    <PrivateLayoutContextProvider>
      <PrivateLayoutContextConsumer
        childrenNodes={(store) => {
          return (
            <PrivateLayoutContainer>
              <Main isOpen={store.store.slideOpened}>
                <Outlet />
              </Main>
            </PrivateLayoutContainer>
          );
        }}
      />
    </PrivateLayoutContextProvider>
  );
};

export default PrivateLayout;
