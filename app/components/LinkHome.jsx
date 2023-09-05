import React from "react";
import Link from "next/link";
import linkStyles from "./link.module.css";

export default function LinkHome() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={linkStyles.footer}>
      <Link href={"navbar"}>
        <img
          className={linkStyles.logoLink}
          src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/sara-vedic-soul/logo-sembackground.png"
          alt="logo"
        />
      </Link>
      <p>
        © {currentYear} website developed by
        <a href="https://github.com/Joanartdacosta">Joana Costa.</a>
      </p>
      <p>All rights reserved.</p>
    </div>
  );
}
