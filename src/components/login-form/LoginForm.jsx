import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../auth-provider/AuthProvider";

const LoginForm = () => {

    const {continueWithGoogle, logInWithEmail} = useContext(UserAuth);

    const handleLogin = (callback) => {
        callback()
            .then(userCredintial => {
                console.log(userCredintial.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // lofin with email and password

    const handleLoginWithEmail = e => {
        e.preventDefault()
        logInWithEmail(e.target.email.value, e.target.password.value)
        .then(userCredintial => {
            console.log(userCredintial.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-1/3 mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLoginWithEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <section>
                            <button onClick={() => handleLogin(continueWithGoogle)} className="btn btn-primary w-full">Continue with Google</button>
                        </section>
                        <Link to={`/login/register-form`}>New here? Please Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;