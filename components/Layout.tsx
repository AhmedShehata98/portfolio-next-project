import { useRouter } from "next/router";
import Navbar from "./Navbar";
import SidePannel from "./SidePannel";

type LayoutProps = {
  children: JSX.Element;
};
const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();

  return (
    <>
      <Navbar />
      <main className="component-wrapper overlay ">
        {pathname !== "/404" && <SidePannel />}
        {children}
      </main>
    </>
  );
};

export default Layout;
