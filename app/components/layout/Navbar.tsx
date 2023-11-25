import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/cargo.webp";

type MenuItem = {
  name: string;
  href: string;
};

const menu: MenuItem[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Contatti",
    href: "#contatti",
  },
  {
    name: "Servizi",
    href: "#servizi",
  },
];

function Navbar() {
  return (
    <div className="drawer drawer-end">
      <input id="Menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full  bg-base-300">
          <div className="max-w-7xl navbar mx-auto">
            <Link href="/" className="flex-1">
              <span className="hover:bg-base-200 flex gap-3 items-center px-3 rounded-lg">
                <Image
                  src={Logo}
                  alt="logo"
                  sizes="100vw"
                  className="h-14 w-14"
                />
                <p className="font-bold text-xl">BAM Traslochi</p>
              </span>
            </Link>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="Menu"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block font-bold">
              <ul className="flex">
                {menu.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:bg-base-200 p-3 px-5 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="Menu"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-0 w-80 min-h-full bg-base-200">
          {menu.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:bg-base-300 p-3 px-5 rounded-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
