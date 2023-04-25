import React from "react";
import Image from "next/image";
import styles from "../styles/DonutList.module.css";
import DonutCard from "./DonutCard";

const DonutList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST DONUT IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a ipsum
        natus nesciunt, eos exercitationem veniam et tempore sit, ut beatae
        magnam, eligendi aliquid laborum blanditiis est quod mollitia eaque.
      </p>
      <div className={styles.wrapper}>
        <DonutCard/>
        <DonutCard/>
        <DonutCard/>
        <DonutCard/>
        <DonutCard/>
        <DonutCard/>
        <DonutCard/>
        <DonutCard/>
      </div>
    </div>
  );
};

export default DonutList;
