import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Profile.module.css";
const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <div className={styles.profile}>
        <h1>Profile</h1>

        <div className={styles.avatar}>
          <img src={user?.image} alt="profile" />
        </div>
        <div className={styles.field}>
          <p> First Name:</p>
          <p> {user?.firstName}</p>
        </div>
        <div className={styles.field}>
          <p> Last Name:</p>
          <p> {user?.lastName}</p>
        </div>
        <div className={styles.field}>
          <p> Username:</p>
          <p> {user?.username}</p>
        </div>
        <div className={styles.field}>
          <p> Email:</p>
          <p> {user?.email}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
