import {Navbar} from "./components/Navbar.jsx";
import {useSelector} from "react-redux";
import Login from "./pages/Login.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {
    const loggedIn = useSelector(state => state.login.email)
    return (
        <>
            <Navbar/>
            <div className="container">
                {loggedIn ? <h1>logged in</h1> : <Login/>}
            </div>
            <Footer/>
        </>)
}

export default App
