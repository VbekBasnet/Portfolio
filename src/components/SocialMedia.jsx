import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialMedia = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedinIn size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/bibek-basnet-301947234/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/VbekBasnet",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "bibekbasnet1440@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Bibek CV.png ",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, download, style }) => (
          <li
            key={id}
            className={
              "flex justify-between item-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 duration-300" +
              "" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
