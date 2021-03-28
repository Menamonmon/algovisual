import { SocialMediaLink } from "../types";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialMediaLinks: SocialMediaLink[] = [
  {
    title: "Github",
    path: "https://github.com/menamonmon",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    path: "https://linkedin.com/in/menafilfil/",
    icon: FaLinkedinIn,
  },
  {
    title: "Email",
    path: "mailto:monyasser@gmail.com",
    icon: MdEmail,
  },
];

export default socialMediaLinks;
