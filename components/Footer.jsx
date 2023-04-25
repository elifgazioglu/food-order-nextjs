import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpeg" layout="fill" alt=""></Image>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            EXPERIENCE THE BLISS OF OUR DELECTABLE DONUTS!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Istiklal Cd.
            <br />
            Istanbul Taksim
            <br />
            8671
          </p>
          <p className={styles.text}>
            Kuru Sok. No:2
            <br />
            Istanbul, 654
            <br />
            Zorlu AVM
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LET'S BE FRIENDS</h1>
          <AiOutlineInstagram className={styles.icons}></AiOutlineInstagram>
          <AiOutlineFacebook className={styles.icons}></AiOutlineFacebook>
          <AiOutlineTwitter className={styles.icons}></AiOutlineTwitter>
        </div>
      </div>
    </div>
  );
};

export default Footer;
