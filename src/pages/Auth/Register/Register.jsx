import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router';
import axios from 'axios';

const Register = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const { registerUser, updateUserProfile } = useAuth();

    const handleReg = (data) =>{
        console.log(data);

        const profileImage = data.image[0];

        registerUser(data.email,data.password)
            .then(result =>{
                console.log(result.user)

                // peeper from data for imgBB
                const fromData = new FormData();
                fromData.append('image', profileImage);


                // upload imgBB use Axios
                const img_Api_Url = `https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_image_host}`

                axios.post(img_Api_Url,fromData)
                    .then(res=> {
                        console.log('after img upload', res.data.data.url)

                        //update user profile
                        const userProfile = {
                            displayName : data.name,
                            photoURL: res.data.data.url
                        }
                        updateUserProfile(userProfile)
                            .then(()=>{
                                console.log('user profile update done..')
                        }).catch(err=>{console.log(err)})
                    })


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
                    {/* Name */}
                    <label className="label">Name</label>
                    <input type="text" {...register('name',{required: true})} className="input" placeholder="Name" />
                    {
                        errors.name?.type === "required" && <p className='text-red-500'>Name is required..</p>
                    }

                    {/* Photo */}
                    <label className="label">Image</label>
                    <input type="file" {...register('image',{required: true})} className="file-input" placeholder="your image" />
                    {
                        errors.image?.type === "required" && <p className='text-red-500'>Image is required..</p>
                    }

                    {/* Email */}
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
                    <button className="btn bg-primary text-secondary mt-4 w-32">Register</button>
                </fieldset>
            </form>
            <p className='py-2'>Already have an account?  <Link className='text-primary underline' to={'/Login'}>Login</Link></p>
             <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;