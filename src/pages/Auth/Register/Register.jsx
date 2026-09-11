import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const {registerUser} = useAuth();

    const handleReg = (data) =>{
        // console.log(data);
        registerUser(data.email,data.password)
            .then(result =>{
                console.log(result.user)
            }).catch(error=>
                console.log(error)
            )
    }

    return (
        <div className='md:ml-20'>
            <h1 className='text-3xl text-secondary font-bold'>Create an Account</h1>
            <p>Register with ZapShift</p>
            <form onSubmit={handleSubmit(handleReg)} className=''>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email',{required: true})} className="input" placeholder="Email" />
                    {
                        errors.email?.type === "required" && <p className='text-red-500'>Email is required..</p>
                    }
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password',{required:true, minLength: 6 , maxLength:8 })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === "required" &&
                        <p className="text-red-500">Please enter your password.</p>
                    }

                    {
                        errors.password?.type === "minLength" &&
                        <p className="text-red-500">Password must contain at least 6 characters.</p>
                    }

                    {
                        errors.password?.type === "maxLength" &&
                        <p className="text-red-500">Password must contain maximum 8 characters.</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4 w-32">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;