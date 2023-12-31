import { useEffect, useState } from "react";
import styles from "../Styles/form.module.css";
import FormControl from "../components/FormControl.jsx";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const fields = [
    {
      id: "first-name",
      label: "first name",
      type: "text",
      placeholder: "enter your first name",
      fieldState: firstName,
      setField: setFirstName,
    },
    {
      id: "last-name",
      label: "last name",
      type: "text",
      placeholder: "enter your last name",
      fieldState: lastName,
      setField: setLastName,
    },
    {
      id: "username",
      label: "username",
      type: "text",
      placeholder: "enter your username",
      fieldState: username,
      setField: setUsername,
    },
    {
      id: "email",
      label: "email",
      type: "email",
      placeholder: "email@example.com",
      fieldState: email,
      setField: setEmail,
    },
    {
      id: "password",
      label: "password",
      type: "password",
      placeholder: "password",
      fieldState: password,
      setField: setPassword,
    },
    {
      id: "confirm-password",
      label: "confirm password",
      type: "password",
      placeholder: "confirm password",

      fieldState: confirmPassword,
      setField: setConfirmPassword,
    },
    {
      id: "image",
      label: "image",
      type: "text",
      placeholder: "upload image link here",
      fieldState: image,
      setField: setImage,
    },
  ];

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  

  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 401 412"
          fill="none"
        >
          <path
            d="M2.8313 159.644C7.28115 104.777 9.51344 77.3436 19.8671 59.603C49.5181 8.77477 135.725 -3.29711 190.18 1.32898C263.067 7.52646 346.469 49.4403 383.169 130.345C416.506 203.834 401.13 287.015 350.904 341.427C258.808 441.174 68.8448 423.36 22.4518 357.919C3.93272 331.793 2.5963 290.07 0.643066 228.786C-0.311523 199.281 1.52425 175.769 2.8313 159.644Z"
            fill="url(#paint0_linear_1_4392)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_4392"
              x1="50.8182"
              y1="92.769"
              x2="248.493"
              y2="442.665"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E3F1FE" />
              <stop offset="1" stopColor="#E3F1FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <img src="" alt="" />
      </div>
      <div className={styles["form-container"]}>
        <h2>create your account</h2>
        <span>
          already have an account?{" "}
          <button className={styles.link}>
            login
          </button>
        </span>
        <form className={styles.form}>
          {fields.map((field) => {
            return <FormControl key={field.id} field={field} />;
          })}

          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                register({
                  firstName,
                  lastName,
                  username,
                  email,
                  password,
                  confirmPassword,
                  image,
                })
              );
            }}
            className={styles.button}
            type={"submit"}
          >
            register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

