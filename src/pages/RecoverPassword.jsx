import styles from "../Styles/form.module.css"
import FormControl from "../components/FormControl.jsx";

const RecoverPassword = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles["form-container"]}>
                    <h2>recover password</h2>

                    <form className={styles.form}>
                        <FormControl
                            field={{
                                type: "email",
                                id: "email",
                                label: "email",
                                placeholder: "email@exapmle.com"
                            }}/>
                        <button className={styles.button} type="submit">recover password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RecoverPassword;