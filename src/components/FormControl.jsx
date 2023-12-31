import styles from "../Styles/form.module.css";
import propTypes from "prop-types"

const FormControl = ({field}) => {
    return (<div className={styles["form-control"]}>
            <label htmlFor={field.id}>{field.label}</label>
            <input value={field.fieldState} onChange={(e) => field.setField(e.target.value)} id={field.id} type={field.type}
                   placeholder={field.placeholder}/>
        </div>)
}

export default FormControl

FormControl.propTypes = {
    field: propTypes.object.isRequired,
}