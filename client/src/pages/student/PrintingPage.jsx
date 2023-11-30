import React from "react";
import { useSelector } from "react-redux";

const PrintingPage = () => {
  const user = useSelector((state) => state.auth.user);
  console.log("user from printing", user);

  return <div>PrintingPage</div>;
};

export default PrintingPage;
