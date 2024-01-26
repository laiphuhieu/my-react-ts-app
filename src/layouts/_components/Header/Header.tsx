import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { navigation } from "@/config/config";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offSet = window.scrollY;
      setIsScrolled(offSet > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`flex items-center px-[16px] py-[8px] fixed top-0 w-full z-50  ${
        isScrolled
          ? "bg-[#eaecefcf] transition-colors duration-300"
          : "transition-colors duration-300"
      }`}
    >
      <Navbar name={navigation.name} links={navigation.links} />
    </header>
  );
};

export default Header;
