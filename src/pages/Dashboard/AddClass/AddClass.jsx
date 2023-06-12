import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import websiteTitle from "../../../utility/websiteTitle";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const { available_seats, class_name, photo, price, summary } = data;

        // photo upload on db
        const imgbbURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`;
        const imageFormData = new FormData()
        imageFormData.append('image', photo[0])
        fetch(imgbbURL, {
            method: "POST",
            body: imageFormData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const imgUrl = data.data.display_url;
                    const classData = { available_seats: parseInt(available_seats), class_name, instructor_name: user?.displayName, photo: imgUrl, instructor_email: user?.email, price: parseFloat(price), summary, enrolled_students: 0, status: 'Pending' }
                    console.log(classData)
                    axios.post(`${import.meta.env.VITE_LOCALHOST}/class`, classData)
                        .then(res => {
                            if (res.data.acknowledged) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'You successfully added a class',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                        .catch(err => console.log(err))
                }
            })
    }

    websiteTitle('Add Class - Artshala')

    return (
        <section className="my-20">
            <SectionTitle title={'Add A Class'} />

            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                <div className="grid md:grid-cols-2 md:gap-5">
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input className="my-input" type="text" placeholder="Class Name" {...register("class_name", { required: true })} required />
                    </div>
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Total Seats</span>
                        </label>
                        <input className="my-input" type="number" placeholder="Total Seats" {...register("available_seats", { required: true })} required />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-5">
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Class Photo</span>
                        </label>
                        <input type="file"  {...register("photo", { required: true })} className='my-input' required />
                    </div>
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Class Fee</span>
                        </label>
                        <input className="my-input" type="number" placeholder="Class Fee" {...register("price", { required: true })} required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-5">
                    <div>

                        <div className="form-control mt-2 ">
                            <label className="label">
                                <span className="label-text">Instructor's Name</span>
                            </label>
                            <input className="my-input" type="text" placeholder="Instructor Name" disabled defaultValue={user?.displayName} {...register("instructor_name")} required />
                        </div>
                        <div className="form-control mt-2">
                            <label className="label">
                                <span className="label-text">Instructor's Email</span>
                            </label>
                            <input className="my-input" type="email" placeholder="Instructor Email" disabled defaultValue={user?.email} {...register("instructor_email")} required />
                        </div>
                        <button className="hidden md:block my-btn mt-5 w-full">Add Class</button>
                    </div>
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Class Summery</span>
                        </label>
                        <textarea name="" rows={7} className="my-input" placeholder="Class summery" {...register("summary", { required: true })}></textarea>
                    </div>
                </div>
                <button type="submit" className=" md:hidden my-btn mt-5 w-full" >Add Class</button>
            </form>
        </section>
    );
};

export default AddClass;