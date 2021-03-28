import React from "react";
import Navbar from "../components/Navbar";
import NavItem from "../components/NavItem";
import DropDownMenu from "../components/DropDownMenu";

import Footer from "../components/Footer";
import FooterItem from "../components/FooterItem";
import FooterIcon from "../components/FooterIcon";

import navLinks from "../links/nav";
import footerLinks from "../links/footer";
import socialMediaLinks from "../links/social";

const GlobalNavbar: React.FC = () => (
  <Navbar>
    {navLinks.dropdowns?.map((dropdown, idx) => (
      <DropDownMenu {...dropdown} key={idx} />
    ))}
    {navLinks.navitems?.map((navitem, idx) => (
      <NavItem {...navitem} key={idx + 10000} />
    ))}
  </Navbar>
);

const GlobalFooter: React.FC = () => (
  <Footer>
    {footerLinks.map((link, idx) => (
      <FooterItem {...link} key={idx} />
    ))}
    {socialMediaLinks.map((link, idx) => (
      <FooterIcon {...link} key={idx + 10000} />
    ))}
  </Footer>
);

const Layout: React.FC<{ head: React.ReactElement }> = ({ children, head }) => (
  <div className="container">
    {head}
    <GlobalNavbar />
    {children}
    <GlobalFooter />
  </div>
);

export default Layout;
