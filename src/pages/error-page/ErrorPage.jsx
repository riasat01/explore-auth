import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1>Something went wrong!!!</h1>
            <Link to={`/`}>Go to home</Link>
        </>
    );
};

export default ErrorPage;