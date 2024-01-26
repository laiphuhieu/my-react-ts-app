/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { HashLink } from "react-router-hash-link";

import { Link, Navigation } from "@/types/navbar";

const Navbar = ({ name, links }: Navigation) => {
  const handleDownload = useCallback(() => {
    window.open("/Phu Hieu - ReactJS.pdf");
  }, []);
  return (
    <nav className="flex items-center">
      <div className="mr-[16px]">
        <HashLink smooth to="#home" className="text-[20px]">
          &lt;{name} /&gt;
        </HashLink>
      </div>
      <ul className="flex">
        {links.map((res: Link, idx: any) => (
          <li className="p-[8px]" key={idx}>
            {res.title === "Resume" ? (
              <>
                <a
                  onClick={handleDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-colors hover:ease-linear hover:text-black  hover:transition-colors hover:duration-300 "
                >
                  {res.title}
                </a>
              </>
            ) : (
              <>
                <HashLink smooth to={res.link}>
                  <span className="transition-colors hover:ease-linear hover:text-black  hover:transition-colors hover:duration-300 ">
                    {res.title}
                  </span>
                </HashLink>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
