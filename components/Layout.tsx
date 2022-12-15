import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return <main className="component-wrapper">{children}</main>;
};

export default Layout;
