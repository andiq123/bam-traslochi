import Nav from "../nav";
import { Analytics } from "@vercel/analytics/react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-1 mt-6">{children}</div>
      <Analytics />
    </div>
  );
};

export default Layout;
