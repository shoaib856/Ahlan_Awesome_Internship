import {useEffect} from "react";
import {useLoaderData, useNavigate} from "react-router-dom";
import styles from "../Styles/Profile.module.css";
import {useSelector} from "react-redux";

const Profile = () => {
    const user = useLoaderData();
    const auth = useSelector((state) => state.auth.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth) {
            navigate("/login");
        }
    }, [auth, navigate]);

    return (
        <>
            <div className={styles.profile}>
                <h1>Profile</h1>

                <div className={styles.avatar}>
                    <img src={user?.image} alt="profile"/>
                </div>
                <div className={styles.field}>
                    <p> Name</p>
                    <p> {user?.name}</p>
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
