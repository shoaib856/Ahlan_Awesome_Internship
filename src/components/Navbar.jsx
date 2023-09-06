import styles from "../Styles/Navbar.module.css"
import formStyles from "../Styles/form.module.css"
import {useDispatch, useSelector} from "react-redux";
import {login} from "../Redux/index.js";

export const Navbar = () => {
    const loggedIn = useSelector(state => state.email)
    const dispatch = useDispatch()
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <nav>
                    {loggedIn ? <button
                            onClick={() => dispatch({...login(), payload: {email: "", password: ""}})}
                            className={formStyles["logout-btn"]}>logout</button> :
                        <button className={formStyles.button}>Register</button>}
                </nav>
            </header>
        </>
    )
}