import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data =>{
        console.log(data);
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
                    <input className='btn btn-accent w-full text-white mt-6' type="submit" />
                </form>
                <p className='mt-5'>New to <strong>Resale?</strong> <Link to='/signup' className='text-primary'>Creat new account</Link></p>

                <div className="divider">OR</div>
                <button className=' btn btn-outline btn-accent w-full'>Login With Google</button>

            </div>
        </div>
    );
};

export default Login;