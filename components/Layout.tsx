import Navbar from "./Navbar";
import SidePannel from "./SidePannel";

type LayoutProps = {
  children: JSX.Element;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="component-wrapper overlay ">
        <SidePannel />
        {children}
      </main>
    </>
  );
};

export default Layout;
