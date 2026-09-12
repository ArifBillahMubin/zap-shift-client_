import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const { signinUser } = useAuth();
    const handleSing = (data)=>{
        signinUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            }).catch(error =>
                console.log(error)
            )
    }

    return (
        <div className='md:ml-20'>
            <h1 className='text-3xl text-secondary font-bold'>Welcome Back</h1>
            <p className='text-sm'>Login with ZapShift</p>
            <form onSubmit={handleSubmit(handleSing)} className=''>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {
                        errors.email?.type === "required" && <p className='text-red-500'>Email is required..</p>
                    }
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6, maxLength: 8 })} className="input" placeholder="Password" />
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
                    <button className="btn btn-primary text-secondary mt-4 w-32">Login</button>
                </fieldset>
            </form>
            <p className='py-2'>Don’t have any account? <Link className='text-primary underline' to={'/register'}>Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;