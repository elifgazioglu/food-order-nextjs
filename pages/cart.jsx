import React from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              {/* <th colSpan={-3}>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th> */}
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.img}
                    src="/img/photo8.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  ></Image>
                </div>
              </td>
              <td>
                <span className={styles.name}>CHOCOLATE</span>
              </td>
              <td>
                <span className={styles.extras}>Extra cream, sugar</span>
              </td>
              <td>
                <span className={styles.price}>$1.99</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$4.50</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>$10.10
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>$10.10
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
