import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/c/new-conversation");
  }, []);
  return <div>redirecting</div>;
}
