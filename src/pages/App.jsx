import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from "../Styles/App.module.css";
import { getProducts } from "../redux-toolkit/products/productsSlice";
import { Link } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.products.isLoading);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <div className={styles.welcome}>
        <h1>welcome to the app</h1>
        <span className={styles.warning}>
          {!user && "please login to see all products"}
        </span>
      </div>
      {user && (
        <>
          {isLoading && <h1>Loading...</h1>}
          <div className={styles.products}>
            {products.map((product) => (
              <div key={product.id}>
                <img src={product.image} alt="product" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <Link to={`product/${product.id}`} className={styles.details}>
                  Details
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
