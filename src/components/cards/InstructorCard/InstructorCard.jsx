const InstructorCard = ({ data }) => {
    return (
        <div className="group relative duration-500">
            <figure className="">
                <img src={data.image} alt="Instructor Pictre" className="w-full h-80 object-cover" />
            </figure>
            <div className="w-5/6 h-5/6 bg-black bg-opacity-50 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center duration-500 text-white scale-0 group-hover:scale-100">
                <h4 className="text-xl font-medium">{data.name}</h4>
                <button className="w-full bg-primary py-1">View Details</button>
            </div>
        </div>
    );
};

export default InstructorCard;