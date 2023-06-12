import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const ClassShowCard = ({ data ,handleSelectClass}) => {
    const {photo, class_name, instructor_name,available_seats, price, summary} = data
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    return (
        <div className={`grid md:grid-cols-2 gap-3 p-2 rounded-md ${available_seats === 0 ? 'bg-red-300' :''}`}>
            <figure>
                <img src={photo} alt="class image" className="w-full h-80 object-cover" />
            </figure>
            <div className=" flex flex-col">
                <h3 className="text-2xl font-semibold">{class_name}</h3>
                <h5 className="text-lg font-medium">Instructor: {instructor_name}</h5>
                <p><span className="font-medium">Available Seats:</span> {available_seats}</p>
                <p><span className="font-medium">Price:</span> ${price}</p>
                <p><span className="font-medium">Summery:</span> {summary.slice(0,200)}</p>
                <button onClick={()=>handleSelectClass(data)} className={`my-btn mt-5 md:mt-auto ${isAdmin || isInstructor || available_seats === 0 ? 'disabled-btn' : ''}`}>Select Now</button>
            </div>
        </div>
    );
};

export default ClassShowCard;