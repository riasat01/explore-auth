import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main-layout/MainLayout";
import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Login from "../pages/login/Login";
import ProductDetails from "../pages/product-details/ProductDetails";
import LoginForm from "../components/login-form/LoginForm";
import RegisterForm from "../components/register-form/RegisterForm";
import About from "../pages/about/About";
import PrivateRoute from "../components/private-route/PrivateRoute";

const MyRouter = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: `/`,
                element: <Home></Home>
            },
            {
                path: `/about`,
                element: <About></About>
            },
            {
                path: `/products`,
                element: <Products></Products>
                // loader: () => fetch(`../anime.json`)
            },
            {
                path: `/login`,
                element: <Login></Login>,
                children: [
                    {
                        path: `/login`,
                        element: <LoginForm></LoginForm>
                    },
                    {
                        path: `/login/register-form`,
                        element: <RegisterForm></RegisterForm>
                    }
                ]
            },
            {
                path: '/product/:id',
                loader: () => fetch(`../anime.json`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            }
        ]
    }
])

export default MyRouter;