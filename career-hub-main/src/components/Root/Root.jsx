import { Outlet } from "react-router-dom";
import Fotter from "../Fotter/Fotter";
import Header from "../H/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Root;
