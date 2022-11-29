import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import { Controller } from "react-hook-form";


const AddProduct = () => {
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
        const phones = form.phones.value;
        var e = document.getElementById("ddlViewBy");
        var value = e.value;
        var type = e.options[e.selectedIndex].text;
        const price = form.price.value;
        const available = form.available.value;
        var e = document.getElementById("location");
        var value = e.value;
        var location = e.options[e.selectedIndex].text;
        var e = document.getElementById("category");
        var value = e.value;
        var category = e.options[e.selectedIndex].text;
        const description = form.description.value;
        const yearofuse = form.yearofuse.value;
        console.log(name, price, phones, type, location, category, description, yearofuse)
        setSignUpError('');
        const product = { name, price, phones, type, location, category, description, yearofuse, available};
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product added Successfully.')
                navigate('/dashboard/myproducts');
        })
    }
    
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-full  p-7'>
                <h2 className='text-4xl text-center mb-5 font-bold'>Product</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Product Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Product Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Mobile</span>
                        </label>
                        <input type="text" name='phones' placeholder="Phone" className="input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-bold w-full">Condition Type</span>
                        </label>
                        <select id="ddlViewBy" className="select select-bordered w-full ">
                            <option value='excellent' selected>Excellent</option>
                            <option name='good'>Good</option>
                            <option name='fair'>Fair</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Location</span>
                        </label>
                        <select id="location" className="select select-bordered w-full ">
                            <option value='dhaka' selected>Dhaka</option>
                            <option name='chittagong'>Chittagong</option>
                            <option name='comilla'>Comilla</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Product Category</span>
                        </label>
                        <select id="category" className="select select-bordered w-full ">
                            <option value='microbus' selected>Microbus</option>
                            <option name='luxurycar'>LuxuryCar</option>
                            <option name='electriccar'>ElectricCar</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <textarea name='description' className="textarea input input-bordered" placeholder="Bio" ></textarea>                   </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Available Stocks</span>
                        </label>
                        <input type="number"  name="available" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Year of Use</span>
                        </label>
                        <input type="number" id="phone" name="yearofuse" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary text-white" type='submit' value='Add Product' />
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddProduct;