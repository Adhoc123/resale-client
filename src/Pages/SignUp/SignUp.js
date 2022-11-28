import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const handleSignUp = data => {
        // console.log(data)
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(error=>console.error(error)) 
            console.log(userInfo)
        })
        .catch(error=> {
            console.error(error);
            setSignUpError(error.message);
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center mb-5 font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: 'Name is required' })} className="input w-full max-w-xs input-bordered" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                    </div>
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
                    <input className='btn btn-accent w-full text-white mt-6' value='Sign Up' type="submit" />
                    {signUpError&&<p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='mt-5'>Already have an account? <Link to='/login' className='text-primary'>Please login</Link></p>

            </div>
        </div>
    );
};

export default SignUp;