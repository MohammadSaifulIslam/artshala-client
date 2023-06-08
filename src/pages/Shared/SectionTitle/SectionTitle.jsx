const SectionTitle = ({title}) => {
    return (
        <div className="text-center ">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <hr className="mx-auto border border-primary w-24 mt-3" />
        </div>
    );
};

export default SectionTitle;