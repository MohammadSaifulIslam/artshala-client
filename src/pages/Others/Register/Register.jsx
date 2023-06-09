import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const { user,createUser, loginUser, updateUser, loginWithGoogle,}= useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [error, setError] = useState(null);
    const [showPass, setShowPass] = useState(false);

    const onSubmit = data => {
        setError(null);
        const { name, email, photo, password, address, phone, gender } = data;


        const imgbbURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`;
        const imageFormData = new FormData()
        imageFormData.append('image',photo[0])
        fetch(imgbbURL,{
            method: "POST",
            body: imageFormData
        })
        .then(res => res.json())
        .then(data =>{
            if(data.success){
              const imgUrl = data.data.display_url;
                console.log(imgUrl, name, email, password, address, phone, gender)
                createUser(email,password)
                .then(result => {
                    console.log(result.user)
                })
                .catch(err => console.log(err))
            }
            }
            
            )
    };


    return (
        <section className='my-container my-10 '>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-5 rounded-xl shadow-xl  md:w-1/3 md:mx-auto px-5 py-10 border-2 border-primary'>
                <h4 className='text-primary text-2xl font-bold mb-5 text-center'>Register Form</h4>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="">
                        <input type="text"  {...register("name", { required: true })} placeholder='Saiful Islam' className='my-input' required />
                        {errors.name && <span className="text-sm text-error">Name is required</span>}
                    </label>
                </div>

                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="">
                        <input type="email" {...register("email", { required: true })} placeholder='example@gmail.com' className='my-input' required />
                        {errors.email && <span className="text-sm text-error">Email is required</span>}
                    </label>
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <label className="">
                        <input type="number" {...register("phone", { required: true })} placeholder='+880111444555' className='my-input' required />
                        {errors.phone && <span className="text-sm text-error">Phone number is required</span>}
                    </label>
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <label className="my-input">
                        <input type="file"  {...register("photo", { required: true })} className='' required />

                    </label>
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Gender</span>
                    </label>
                    <label>
                        <select className='my-input' {...register("gender", { required: true })} >
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <span className="text-sm text-error">Gender is required</span>}
                    </label>
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Address</span>
                    </label>
                    <label className="">

                        <input type="text"  {...register("address", { required: true })} placeholder='Wapda Road, Dhaka' className='my-input' required />
                        {errors.photo && <span className="text-sm text-error">Address is required</span>}
                    </label>
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <label className="relative">
                        <input type={showPass ? 'text' : 'password'} {...register("password", { required: true })} placeholder='*******' className='my-input mb-1' required />
                        <span>
                            {
                                !showPass ? <EyeIcon title='Show password' onClick={() => setShowPass(true)} className='h-6 w-6 absolute top-3 right-3 z-20 cursor-pointer'></EyeIcon>
                                    : <EyeSlashIcon title='Hide password' onClick={() => setShowPass(false)} className='h-6 w-6 absolute top-3 right-3 z-20 cursor-pointer'></EyeSlashIcon>
                            }
                        </span>
                        {errors.password && <span className="text-sm text-error">Password  is required</span>}
                    </label>
                </div>

                <div className="form-control mt-4">
                    <label className="flex gap-4 cursor-pointer">
                        <input type="checkbox" className="checkbox" required />
                        <span className="">Accept Terms & Conditions</span>
                    </label>
                </div>
                <button className='my-btn w-full mt-5'>Create an account</button>
                <p className='text-error text-center mt-2'>{error}</p>
                <p className='text-center mt-2'>Already have an account? <Link to='/login' className='text-primary underline'>Login</Link></p>
            </form>
        </section>
    );
};

export default Register;