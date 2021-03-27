import Head from "next/head";
import Navbar from "../components/Navbar";
import NavItem from "../components/NavItem";
import DropDownMenu from "../components/DropDownMenu";

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
    </div>
  );
}
