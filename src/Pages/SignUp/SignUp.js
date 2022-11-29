import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import { Controller } from "react-hook-form";


const SignUp = () => {
    const { control, reset, register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        var e = document.getElementById("ddlViewBy");
        var value = e.value;
        var role = e.options[e.selectedIndex].text;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, role)
        setSignUpError('');
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, role);
                    })
                    .catch(error => console.error(error))
                console.log(userInfo)
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message);
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
                navigate('/');
                setCreatedUserEmail(email);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center mb-5 font-bold'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div>
                        <label className="label">
                            <span className="label-text">Account Type</span>
                        </label>
                        <select id="ddlViewBy" className="select select-bordered w-full max-w-xs">
                            <option value='user' selected>user</option>
                            <option name='seller'>seller</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary text-white" type='submit' value='Sign Up' />
                    </div>
                </form>
                <p className='mt-5'>Already have an account? <Link to='/login' className='text-primary'>Please login</Link></p>

            </div>
        </div>
    );
};

export default SignUp;