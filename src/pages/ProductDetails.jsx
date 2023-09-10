import { useLoaderData } from "react-router-dom";
import styles from "../Styles/ProductDetails.module.css";

const ProductDetails = () => {
  const data = useLoaderData();
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={data.image} alt="product" />
        </div>
        <div className={styles.descriptionContainer}>
        <h3>{data.category}</h3>
          <div className={styles.title}>
            <h1>{data.title}</h1>
            <div>
              <span>{data.rating.rate}⭐</span>
              <span>({data.rating.count})</span>
            </div>
          </div>
          <p>{data.description}</p>
          <div className={styles.addCart}>
          <p>${data.price}</p>
          <button>add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
