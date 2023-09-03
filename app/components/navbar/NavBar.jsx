import React from "react";
import navBarStyles from "./navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={navBarStyles.navBarMenu}>
      <Link className={navBarStyles.link} href={"#contact"}>
        Contact
      </Link>
      <Link className={navBarStyles.link} href={"#consultation"}>
        Schedule a consultation
      </Link>
      <Link className={navBarStyles.link} href={"#website"}>
        My Website
      </Link>
      <Link className={navBarStyles.link} href={"#learn"}>
        Learn about Astrology
      </Link>
    </div>
  );
}
