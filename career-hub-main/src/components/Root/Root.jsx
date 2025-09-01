import { Outlet } from "react-router-dom";
import Fotter from "../Fotter/Fotter";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Root;
