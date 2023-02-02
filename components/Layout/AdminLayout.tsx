import React, { ReactNode } from "react";
import Sidebar from "../SideBar/SideBar";
import WrapperLayout from "./WrapperLayout";

type Props = {
  children: ReactNode;
};

const AdminLayout = (props: Props) => {
  const [IsOpen, setIsOpen] = React.useState<boolean>(false);
  const { children } = props;
  const getOpenSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <WrapperLayout>
      <Sidebar open={IsOpen} toggleSidebar={getOpenSidebar} />
      {children}
    </WrapperLayout>
  );
};

export default AdminLayout;
