import { Navigation } from "@/types/navbar";
import { Profile } from "@/types/profile";
import { Contact } from "@/types/contact";

import { FaFacebook, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const BASE_URL = (import.meta.env.REACT_APP_BASE_URL || "") as string;
export const API_TOKEN = (import.meta.env.REACT_APP_API_TOKEN || "") as string;

export const navigation: Navigation = {
  name: "PhuHieu",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Resume",
      link: "#resume",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Skills",
      link: "#skills",
    },
  ],
};

export const profile: Profile = {
  description:
    "I am looking for a full-time and long-term job. As a positive and creative Frontend developer, I have a keen ability to learn quickly and adapt new technologies. For the last year, I have been actively working with Javascript and its technologies (ReactJs)",
  image:
    "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/315169524_4061970150693848_8766993325938245015_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH4HYIUX6VQruU1F8LeE29U7QAG--SrvxTtAAb75Ku_FNwlI_sdiyoj21bSRTCc6k47As9s03g5sg9deWv3NIGF&_nc_ohc=-W9Fqr2DxFsAX-0AEAE&_nc_ht=scontent.fhan20-1.fna&oh=00_AfBkIunAoyi71Dg9_bFGD4iGacg-oZRs_NiTfFgbeuCrPA&oe=65B4A2E4",
};

export const contact: Contact = {
  contacts: [
    {
      link: "https://github.com/laiphuhieu",
      icon: (
        <FaGithub className="w-[48px] h-[48px] transition-colors hover:ease-linear hover:text-black  hover:transition-colors hover:duration-300" />
      ),
    },
    {
      link: "https://www.facebook.com/hieu.laiphu",
      icon: (
        <FaFacebook className="w-[48px] h-[48px] transition-colors hover:ease-linear hover:text-black  hover:transition-colors hover:duration-300" />
      ),
    },
    {
      link: "laiphuhieu123@gmail.com",
      icon: (
        <IoMdMail className="w-[48px] h-[48px] transition-colors hover:ease-linear hover:text-black  hover:transition-colors hover:duration-300" />
      ),
    },
    {
      link: "0328739566",
      icon: (
        <FaPhoneAlt className="w-[48px] h-[48px] transition-colors hover:ease-linear hover:text-black  hover:transition-colors hover:duration-300" />
      ),
    },
  ],
};
