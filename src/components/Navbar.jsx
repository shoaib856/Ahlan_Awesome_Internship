import styles from "../Styles/Navbar.module.css";
import formStyles from "../Styles/form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux-toolkit/auth/authSlice.js";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <>
      <header className={styles.header}>
        <Link to={"/"} className={styles.logo}>
          LOGO
        </Link>
        <nav className={styles.navbar}>
          {user ? (
            <>
              <button
              type="button"
                onClick={() => dispatch(logout())}
                className={formStyles["logout-btn"]}
              >
                logout
              </button>
              <Link to="/profile" className={styles.avatar}>
                <img src={user.image} alt="avatar" />
              </Link>
            </>
          ) : (
            <Link to="/login" className={formStyles.button}>
              login
            </Link>
          )}
        </nav>
      </header>
    </>
  );
};
