import React from "react";
import Image from "next/image";
import styles from "@/styles/Product.module.css";

const Product = () => {
  const donut = {
    id: 1,
    img: "/img/photo9.png",
    name: "STRAWBERRY DONUT",
    price: [1.99],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti odio deserunt quis eaque id blanditiis cumque vel dolorum. Temporibus.",
    multiple: false,
    quantity: 1
  }; 

  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <div className={styles.imgContainer}>
          <Image
            src={donut.img}
            objectFit="contain"
            layout="fill"
            alt=""
          ></Image>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{donut.name}</h1>
        <span className={styles.price}>${donut.price}</span>
        <p className={styles.desc}>{donut.desc}</p>
        <div className={styles.add}>
            <input className={styles.quantity} type="number" defaultValue={1}></input>
            <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
