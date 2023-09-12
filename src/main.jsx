import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import store from "./redux/store.js";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import axios from "axios";
import NotFound from "./pages/NotFound.jsx";
import instance from "./api/axios.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {index: true, element: <App/>},
            {path: "login", element: <Login/>},
            {path: "register", element: <Register/>},
            {
                path: "profile",
                element: <Profile/>,
                loader: async () => {
                    try {
                        const res = await instance.get("profiles/default")
                        return res.data
                    } catch (err) {
                        return err.response.data
                    }

                }
            },
            {
                path: "product/:id",
                element: <ProductDetails/>,
                loader: async ({params}) => {
                    const res = await axios.get(
                        `https://fakestoreapi.com/products/${params.id}`
                    );
                    return res.data;
                },
            },
        ],
    },
    {path: "*", element: <NotFound/>},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
