import { styled } from "@nextui-org/react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
const NavbarTop = () => {
  const navLinks = ["about", "work", "contact", "skills"];
  const MyLink = styled(HashLink, {
    color: "$navColor",
    fontSize: "$fs_sm",
  });

  return (
    <nav className="overflow-x-scroll pointer-events-auto">
      <ul className="nav-link space-x-3  h-9 flex items-end ">
        <BrowserRouter>
          {navLinks.map((item, key) => (
            <MyLink
              key={key}
              smooth={true}
              to={`/#${item}`}
              className="hover:text-gray-400 capitalize text-ellipsis "
              rel="prefetch"
            >
              {item}
            </MyLink>
          ))}
        </BrowserRouter>
      </ul>
    </nav>
  );
};

export default NavbarTop;
