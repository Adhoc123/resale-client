import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import {GoogleAuthProvider} from 'firebase/auth';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [loginError, setLoginError] = useState('');
    const {providerLogin, signIn, user } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    // console.log(user)
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    
    if(token){
        navigate(from, {replace: true})
    }
    const handleLogin = data =>{
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            setLoginUserEmail(data.email);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error);
            // setLoginError(error.message);
        })
    }
    const handleGoogleSignIn = () =>{
         providerLogin(googleProvider)
         .then(result =>{
            const user = result.user;
            saveUser(user?.displayName, user?.email, 'buyer')
            navigate(from, {replace: true})
         })
         .catch(error => {
            console.error(error);
            // setLoginError(error.message);
        })
    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center mb-5 font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email is required' })} className="input w-full max-w-xs input-bordered" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full w-full">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: 'Password is required' })} className="input w-full max-w-xs input-bordered" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input onClick={handleLogin} className='btn btn-accent w-full text-white mt-6' value='Login' type="submit" />
                    {/* {loginError&&<p>{loginError}</p>} */}
                </form>
                <p className='mt-5'>New to <strong>Resale?</strong> <Link to='/signup' className='text-primary'>Creat new account</Link></p>

                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className=' btn btn-outline btn-accent w-full'>Login With Google</button>

            </div>
        </div>
    );
};

export default Login;