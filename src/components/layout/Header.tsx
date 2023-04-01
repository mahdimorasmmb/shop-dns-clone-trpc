import Link from "next/link";
import React from "react";
import Container from "../Container";

const Header = () => {
  const navItems = [
    { title: "comparison", link: "/comparison" },
    { title: "favorite", link: "/favorite" },
    { title: "cart", link: "/cart" },
    { title: "login", link: "/login" },
  ];
  return (
    <div className=" shadow">
      <Container tag="header" className="flex  gap-4 p-2 ">
        <Link
          href="/"
          className="block rounded-lg bg-orange-400 px-4 py-2 text-3xl font-bold text-white "
        >
          {" "}
          DNS
        </Link>
        <input
          type="text"
          placeholder="Search the site"
          className="flex-1 rounded-lg  bg-gray-100"
        />
        <nav className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link href={item.link} key={item.title}>
              {item.title}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
};

export default Header;
