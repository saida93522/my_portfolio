import { Link } from "@nextui-org/react";

const NavbarTop = () => {
  const navLinks = ["about", "work", "contact"];
  return (
    <nav className="overflow-x-scroll pointer-events-auto">
      <ul className="nav-link space-x-3 sm:space-x-10  h-9 flex items-center sm:pl-10 ">
        {navLinks.map((item, key) => (
          <Link
            key={key}
            href={`#${item}`}
            css={{ color: "$navColor", fontSize: "$fs_sm" }}
            className="hover:text-gray-400 pl-2md:pl-0 capitalize text-ellipsis"
            rel="prefetch"
          >
            {item}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarTop;