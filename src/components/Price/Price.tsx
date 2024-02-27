import styles from "./Price.module.scss";

interface IProps {
  price: number;
  type: "weekday" | "weekend";
}

const Price = (props: IProps) => {
  const { type, price } = props;
  if (!price || price===0){
    return (
      <div className={styles.container}>
      <div className={styles.price}>
        <span> цену уточняйте </span>
      </div>
      
    </div>
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.price}>
        от <span>{price} </span>BYN{" "}
      </div>
      <p>{type === "weekday" ? "будни" : "выходные"}</p>
    </div>
  );
};

export default Price;
