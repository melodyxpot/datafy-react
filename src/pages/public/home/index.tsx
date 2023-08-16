import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return <div>redirecting</div>;
}
