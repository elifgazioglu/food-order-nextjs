import Image from "next/image";
import React from "react";
import { BsCart2, BsTelephone } from "react-icons/bs";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <BsTelephone className={styles.telephoneIcon}></BsTelephone>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>0212 121 1212</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homapage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width={70} height={70}></Image>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <BsCart2 className={styles.cartIcon}></BsCart2>
        <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
