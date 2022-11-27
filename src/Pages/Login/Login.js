import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center mb-5 font-bold'>Login</h2>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} className="input w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input w-full max-w-xs"/>
                    </div>
                    <input className='btn btn-accent w-full text-white mt-6' type="submit" />
                </form>
                <p className='mt-5'>New to <strong>Resale?</strong> <Link to='/signup' className='text-primary'>Creat new account</Link></p>
            </div>
        </div>
    );
};

export default Login;