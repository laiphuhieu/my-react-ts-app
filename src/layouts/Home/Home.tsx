import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import { Contact } from "@/types/contact";

const Home = ({ contacts }: Contact) => {
  return (
    <section className="my-0 mx-auto py-[48px] px-[12px] absolute z-20">
      <div className="px-[12px]">
        <h1 className="mb-[8px] text-[100px] text-white font-thin">
          Lai Phu Hieu
        </h1>
        <div className="text-white text-[30px] flex justify-center">
          I'm a&nbsp;
          <span className="text-[#0000008c] animate-character">
            Frontend Developer
          </span>
        </div>
        <div className="p-[48px] flex  justify-between text-white">
          {contacts.map((value, idx) => (
            <Link
              key={idx}
              to={value.link}
              className="transition-colors hover:ease-linear hover:text-black  hover:transition-colors hover:duration-300 "
              target="_blank"
            >
              {value.icon}
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="px-[16px] py-[8px] border-[1px] border-solid border-white rounded-[8px] transition-all hover:bg-white hover:text-[#0000008c] text-white text-[20px]">
            <div>
              <HashLink smooth to={"#about"}>
                More About Me
              </HashLink>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;
