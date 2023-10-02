import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../auth-provider/AuthProvider';

const RegisterForm = () => {

    const { continueWithGoogle, createAccountWithemail, continueWithGithub, handleUpdateUserInfo } = useContext(UserAuth);

    const handleRegister = (callback) => {
        callback()
            .then(userCredintial => {
                console.log(userCredintial.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // register with email and password
    
    const handleRegisterWithEmail = e => {
        e.preventDefault();
        console.log(e.target.email.value, e.target.password.value);
        createAccountWithemail(e.target.email.value, e.target.password.value)
        .then(userCredintial => {
            console.log(userCredintial.user);
            handleUpdateUserInfo(e.target.name.value)
            .then(()=> alert(`user name updated`))
            .catch(error => console.log(error.message));
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-1/3 mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegisterWithEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <section className='space-y-2'>
                            <button onClick={() => handleRegister(continueWithGoogle)} className="btn btn-primary w-full">Continue with Google</button>
                            <button onClick={() => handleRegister(continueWithGithub)} className="btn btn-primary w-full">Continue with Github</button>
                        </section>
                        <Link to={`/login`}>Already have an account? Please  Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;