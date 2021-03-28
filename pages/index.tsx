import Head from "next/head";

import Navbar from "../components/Navbar";
import NavItem from "../components/NavItem";
import DropDownMenu from "../components/DropDownMenu";

import Footer from "../components/Footer";
import FooterItem from "../components/FooterItem";
import FooterIcon from "../components/FooterIcon";

import navLinks from "../links/nav";
import footerLinks from "../links/footer";
import socialMediaLinks from "../links/social";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | AlgoVisual</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        {navLinks.dropdowns?.map((dropdown, idx) => (
          <DropDownMenu {...dropdown} key={idx} />
        ))}
        {navLinks.navitems?.map((navitem, idx) => (
          <NavItem {...navitem} key={idx + 10000} />
        ))}
      </Navbar>
      <Footer>
        {footerLinks.map((link, idx) => (
          <FooterItem {...link} key={idx} />
        ))}
        {socialMediaLinks.map((link, idx) => (
          <FooterIcon {...link} key={idx + 10000} />
        ))}
      </Footer>
    </div>
  );
}
