import styles from "../Styles/Navbar.module.css"
import formStyles from "../Styles/form.module.css"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux-toolkit/login/loginSlice.js";

export const Navbar = () => {
    const loggedIn = useSelector(state => state.login.email)
    const dispatch = useDispatch()
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <nav>
                    {loggedIn ? <button
                            onClick={() => dispatch(logout())}
                            className={formStyles["logout-btn"]}>logout</button> :
                        <button className={formStyles.button}>Register</button>}
                </nav>
            </header>
        </>
    )
}