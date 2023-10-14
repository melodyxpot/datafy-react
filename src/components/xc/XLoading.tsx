import React from "react";
import styled from "styled-components";
import "assets/styles/x-loading.css";
import { useXLoading } from "contexts/XLoadingContext";

const XLoadingContainer = styled.div<{ isLoading: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: fixed;
  z-index: 99999;

  ${({ isLoading }) => `
		${isLoading ? "display: block" : "display: none"}
	`}
`;

const XLoading = () => {
  const { isLoading } = useXLoading();
  return (
    <XLoadingContainer isLoading={isLoading}>
      <div id="loading-page">
        <div className="loading-icon one"></div>
        <div className="loading-icon two"></div>
        <div className="loading-icon three"></div>
      </div>
    </XLoadingContainer>
  );
};

export default XLoading;
