import React from "react";
import Image from "next/image";
import styles from "../styles/DonutCard.module.css";

const DonutCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/photo1.png" alt="" width="250" height="250"></Image>
      <h1 className={styles.title}>CHOCOLATE DONUT</h1>
      <span className={styles.price}>$5.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
        accusantium.
      </p>
    </div>
  );
};

export default DonutCard;
