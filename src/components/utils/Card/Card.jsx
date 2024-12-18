import styles from "./Card.module.css";

function Card({ title, desc, price, image }) {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
      <p className={styles.price}>{price} R$</p>
    </div>
  );
}

export default Card;
