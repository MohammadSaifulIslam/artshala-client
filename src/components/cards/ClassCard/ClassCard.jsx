const ClassCard = ({data}) => {
    const {photo, class_name} = data
    return (
        <div className="group ">
        <figure className="border-[16px]  border-black p-4 cursor-pointer overflow-hidden">
        <img src={photo} alt="class image" className="w-full h-[400px] object-cover group-hover:scale-110 duration-500 "/>
        </figure>
         <h4 className="text-2xl text-center font-semibold mt-4 cursor-pointer group-hover:text-primary duration-500">{class_name}</h4>
     </div>
    );
};

export default ClassCard;
