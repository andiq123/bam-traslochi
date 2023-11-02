import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cargo from "../public/images/cargo.png";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    href: "#initial",
  },
  { title: "Servizi", href: "#servizi" },
  {
    title: "Perché noi",
    href: "#about",
  },
  {
    title: "Trovaci",
    href: "#contact",
  },
];

const Nav = () => {
  return (
    <nav className="navbar bg-base-100 bg-opacity-50 backdrop-blur-md fixed z-20">
      <div className="flex-1">
        <Link href="/#initial">
          <button className="btn btn-ghost normal-case text-2xl font-bold flex gap-2">
            <Image
              src={cargo}
              className="max-w-sm rounded-lg shadow-2xl"
              width={50}
              height={50}
              alt="cargo-logo"
              quality={100}
            />
            Bam Traslochi
          </button>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 lg:flex hidden gap-2">
          {navLinks.map((link) => (
            <li className="font-bold" key={link.title}>
              <Link href={link.href}>{link.title.toUpperCase()}</Link>
            </li>
          ))}
        </ul>

        <ul className="menu menu-horizontal lg:hidden z-10 dropdown dropdown-end">
          <li tabIndex={0}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-3xl rounded-lg"
              swapOpacity={true}
            />
            <ul className="menu bg-base-100 bg-opacity-90 backdrop-blur-xl rounded-box dropdown-content w-52">
              {navLinks.map((link) => (
                <li className="font-bold" key={link.title}>
                  <Link href={link.href}>{link.title.toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
