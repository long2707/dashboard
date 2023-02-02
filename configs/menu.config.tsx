import { ReactNode } from "react";

import InsertChartIcon from "@mui/icons-material/InsertChart";
import LocalMallIcon from "@mui/icons-material/LocalMall";

interface menuType {
  display: string;
  path: string;
  state: string;
  icon: ReactNode;
}

const menu: menuType[] = [
  {
    display: "dashboard",
    path: "/dashboard",
    state: "dashboard",
    icon: <InsertChartIcon />,
  },
  {
    display: "product",
    path: "/product",
    state: "product",
    icon: <LocalMallIcon />,
  },
];

export default menu;
