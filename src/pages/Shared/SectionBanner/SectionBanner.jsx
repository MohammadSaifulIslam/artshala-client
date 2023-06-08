const SectionBanner = ({title}) => {
    return (
        <div className="relative">
            <img src="https://img.freepik.com/free-photo/abstract-multi-colored-illustration-nature-vibrant-beauty-generated-by-ai_188544-15591.jpg?w=826&t=st=1686241899~exp=1686242499~hmac=fccb6a9dd825217a44d56e1a49faedc9f47448d3e22ce6e6d753678002ed418f" alt="Page image" className="w-full h-[500px] object-cover" />
            <div className="w-full h-[500px] bg-black bg-opacity-40 absolute top-0 left-0 z-10 flex flex-col justify-center items-center text-white text-center">
                <h2 className="text-5xl font-semibold  mb-5">{title}</h2>
                <p className="px-5 md:w-1/2 mx-auto">Our instructors page features a team of highly skilled and experienced artists who are passionate about teaching.</p>
            </div>
        </div>
    );
};

export default SectionBanner;