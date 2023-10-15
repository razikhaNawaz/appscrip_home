import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>Logo</p>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/blog">Our Blog</Link>
        <Link href="/support">Support</Link>
        <Link href="/affiliate">Affiliate</Link>
        <Link href="/programs">Programs</Link>
        <svg
          className={styles.programIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ></svg>
      </div>
      <div className={styles.authLinks}>
        <Link href="/login">Login</Link>
        <button className={styles.signupButton}>Sign Up</button>
      </div>
      {/* Burger button for mobile */}
      <div className={styles.burgerButton}>
        {/* You can place your burger icon here */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.33447 23.9999H26.6678"
            stroke="#FBFBFB"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M5.33447 15.9999H26.6678"
            stroke="#FBFBFB"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M5.33447 7.9999H26.6678"
            stroke="#FBFBFB"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
