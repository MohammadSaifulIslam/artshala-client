import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AddClass = () => {
    const {user} = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="my-20">
            <SectionTitle title={'Add A Class'} />
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">

                <div className="grid md:grid-cols-2 gap-5">
                    <input className="my-input" type="text" placeholder="Class Name" {...register("class_name", { required: true })} required />
                    <input className="my-input" type="number" placeholder="Total Seats" {...register("available_seats", { required: true })} required />
                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-5">
                    <div>
                        <input className="my-input" type="number" placeholder="Class Fee" {...register("price", { required: true })} required />
                        <input className="my-input mt-5" type="text" placeholder="Instructor Name" disabled defaultValue={user?.displayName} {...register("instructor_name", { required: true })} required />
                        <input className="my-input mt-5" type="email" placeholder="Instructor Email" disabled defaultValue={user?.email} {...register("instructor_email", { required: true })} required />
                        <div className="mt-5">
                        <label className="">
                            <input type="file"  {...register("photo", { required: true })} className='my-input' required />
                        </label>
                        </div>
                        <input type="submit" className="hidden md:block my-btn mt-5 w-full" />
                    </div>
                    <textarea name="" id="" cols="30" rows="12" className="my-input" placeholder="Class summery" {...register("summary", { required: true })}></textarea>
                </div>
                <input type="submit" className=" md:hidden my-btn mt-5 w-full" />
            </form>
        </section>
    );
};

export default AddClass;