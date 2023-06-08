import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    const [error, setError] = useState(null);
    const [showPass, setShowPass] = useState(false);
    return (
        <section className='my-container my-20 '>
        <form onSubmit={handleSubmit(onSubmit)} className='mx-5 rounded-xl shadow-xl  md:w-1/3 md:mx-auto px-5 py-10 border-2 border-primary'>
           <h4 className='text-primary text-2xl font-bold mb-5 text-center'>Login Form</h4>
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Your Email</span>
               </label>
               <label className="">
                   <input type="email" {...register("email" , { required: true })} placeholder='example@gmail.com' className='my-input' required />
               </label>
           </div>
           <div className="form-control mt-4">
               <label className="label">
                   <span className="label-text">Your Password</span>
               </label>
               <label className="relative">
                   <input type={showPass ? 'text' : 'password'} {...register("password" , { required: true })} placeholder='*******' className=' my-input mb-1' required />
                   <span>
                       {
                           !showPass ? <EyeIcon title='Show password' onClick={()=> setShowPass(true)} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></EyeIcon>
                               : <EyeSlashIcon title='Hide password'  onClick={()=> setShowPass(false)} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></EyeSlashIcon>
                       }
                   </span>
                   {errors.password && <span>This field is required</span>}
               </label>
           </div>
           <Link to='/reset-password' className=" btn-link text-error cursor-pointer normal-case" >Forgot password?</Link>
           <div className="form-control mt-4">
               <label className="flex gap-4 cursor-pointer">
                   <input type="checkbox" className="checkbox" />
                   <span className="">Remember me</span>
               </label>
           </div>
           <button className='my-btn w-full mt-5'>Login</button>
           <p className='text-error text-center mt-2'>{error}</p>
           <p className='text-center mt-2'>Don't have an account? <Link to='/register' className='text-primary underline'>Create an account</Link></p>

           {/* login with google and github */}
           <div className="divider">Or</div>
          <div className="flex justify-between gap-4 mt-2">
          <span className='outline-btn w-full flex items-center justify-center gap-2 '> <FaGoogle></FaGoogle>Google
         
          </span>
          <span  className='outline-btn w-full flex items-center justify-center gap-2 '>
            <FaGithub/>
            Github</span>
          </div>
       </form>
      </section>
    );
};

export default Login;