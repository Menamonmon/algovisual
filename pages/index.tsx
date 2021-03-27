import Head from "next/head";
import Navbar from "../components/Navbar";
import NavItem from "../components/NavItem";
import DropDownMenu from "../components/DropDownMenu";
import Footer from "../components/Footer";
import FooterItem from "../components/FooterItem";
import FooterIcon from "../components/FooterIcon";
import { FaFacebook, FaGithub, FaGoogle, FaTwitch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | AlgoVisual</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <DropDownMenu
          name="Sorting Algorithms"
          items={[
            { name: "Item 12222222", path: "/shit" },
            { name: "Item 1", path: "/shit/" },
          ]}
          key="1"
        />
        <NavItem name="google" path="/components/" key="2" />
        <NavItem name="google" path="/components/" key="3" />
        <NavItem name="google" path="/components/" key="4" />
        <NavItem name="google" path="/components/" key="5" />
      </Navbar>
      <Footer>
        <FooterItem path="Google" name="google" />
        <FooterItem path="Google" name="google" />
        <FooterItem path="Google" name="google" />
        <FooterItem path="Google" name="google" />
        <FooterItem path="Google" name="google" />
        <FooterIcon path="https://github.com/menamonmon" icon={FaFacebook} />
        <FooterIcon path="https://github.com/menamonmon" icon={FaGoogle} />
        <FooterIcon path="https://github.com/menamonmon" icon={FaGithub} />
      </Footer>
    </div>
  );
}
