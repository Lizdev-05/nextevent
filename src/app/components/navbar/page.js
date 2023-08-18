import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Next-Event</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            {" "}
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
