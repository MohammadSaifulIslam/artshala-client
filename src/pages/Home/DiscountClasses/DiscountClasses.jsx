import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const DiscountClasses = () => {
    const [classes, setClasess] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_LOCALHOST}/classes`)
            .then(res => {
                const dClass = Math.floor(Math.random() * res.data.length);
                if (dClass > 3 || dClass < res.data.length) {
                    setClasess(res.data.slice(parseInt(dClass) - 2, parseInt(dClass)))
                }

            })
    }, [])
    console.log(classes)
    return (
        <section className="my-container mt-20">
            <SectionTitle title={'Summer Discount'} />
            <div className="mt-10 grid gap-10">
                {
                    classes.map((disClass, index) =>
                        <div key={disClass._id} className="grid md:grid-cols-2 gap-10">
                            {index === 0 && <figure className="border-[20px] border-[#FFB347] h-96 md:w-96 md:ms-auto">
                                <img src={disClass.photo} alt="class photo" className="w-full h-full bg-cover" />
                            </figure>
                            
                            }
                            <div className={`${index === 1 ? 'order-2' : ''}`}>
                                <div className="flex justify-between">
                                    <h3 className="text-2xl md:text-3xl font-semibold">{disClass.class_name}</h3>
                                    <p className="my-btn">Save ${disClass.price - (disClass.price / 10 * 9).toFixed(2)} </p>
                                </div>
                                <h2 className="text-3xl font-medium space-x-4 mt-1F"> <span className="text-[#FFB347]">${disClass.price / 10 * 9}</span> <del>${disClass.price} </del></h2>
                                <div className="text-gray-500 mt-10 font-medium space-y-2">
                                    <p className="">Available Seats: {disClass.available_seats}</p>
                                    <p>Instructor Name: {disClass.instructor_name
                                    }</p>
                                    <p>Summery: {disClass.summary}</p>
                                </div>
                                <button className="my-btn mt-4">View Details</button>
                            </div>
                            {index === 1 && <figure className="order-1 md:order-2 border-[20px] border-[#FFB347] h-96 md:w-96 md:me-auto">
                                <img src={disClass.photo} alt="class photo" className="w-full h-full bg-cover" />
                            </figure>}
                        </div>)
                }

            </div>
        </section>
    );
};

export default DiscountClasses;