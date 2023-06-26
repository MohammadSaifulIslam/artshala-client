import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const BuyProducts = () => {
    return (
        <section className="my-container mt-20">
            <SectionTitle title={'Buy Products'} />
            <div className="grid md:grid-cols-3 gap-5 mt-10">
                <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
                    <div className="md:col-span-2 h-96 w-full relative group duration-500 overflow-hidden">
                        <img src="https://img.freepik.com/premium-photo/abstract-bird-spring-flower-generative-ai_372999-13300.jpg?w=740" alt="" className="h-full w-full object-center bg-cover group-hover:scale-110 duration-500" />
                        <div className="w-5/6 h-5/6 bg-black bg-opacity-50 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center duration-500 text-white scale-0 group-hover:scale-100 space-y-3">
                            <h4 className="text-xl font-medium">Bird Sit On Tree</h4>
                            <p className="text-xl">Price: <span className="text-[#FFB347] ">$19</span></p>
                            <button className="bg-[#FFB347] py-1 w-2/3">Add to Cart</button>
                        </div>
                    </div>
                    <div className="relative group duration-500 overflow-hidden">
                        <img src="https://img.freepik.com/free-photo/vibrant-floral-bouquet-displays-beauty-nature-generated-by-ai_188544-9677.jpg?w=826&t=st=1687675317~exp=1687675917~hmac=f25d097db871a4d7336346826e07c0bf2212fc7a963807f25bf0698331ea02cb" alt="" />
                         <div className="w-5/6 h-5/6 bg-black bg-opacity-50 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center duration-500 text-white scale-0 group-hover:scale-100 space-y-3">
                            <h4 className="text-xl font-medium">Bird Sit On Tree</h4>
                            <p className="text-xl">Price: <span className="text-[#FFB347] ">$19</span></p>
                            <button className="bg-[#FFB347] py-1 w-2/3">Add to Cart</button>
                        </div>
                    </div>
                    <div className="relative group duration-500 overflow-hidden">
                        <img src="https://img.freepik.com/free-photo/vibrant-autumn-leaves-create-grunge-backdrop-generated-by-ai_188544-11708.jpg?t=st=1687676244~exp=1687676844~hmac=89899593b87d306befda76f3e6782aba41ddc966d80b9227bf0167f9f4c6ce29&w=826" alt="" />
                         <div className="w-5/6 h-5/6 bg-black bg-opacity-50 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center duration-500 text-white scale-0 group-hover:scale-100 space-y-3">
                            <h4 className="text-xl font-medium">Bird Sit On Tree</h4>
                            <p className="text-xl">Price: <span className="text-[#FFB347] ">$19</span></p>
                            <button className="bg-[#FFB347] py-1 w-2/3">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="md:h-full relative group duration-500 overflow-hidden">
                    <img src="https://img.freepik.com/premium-photo/sunset-landscape-watercolor-painting-background_510791-257.jpg?size=626&ext=jpg&uid=R59828080&ga=GA1.2.562300066.1684249269&semt=ais" alt="" className="md:h-full w-full" />
                     <div className="w-5/6 h-5/6 bg-black bg-opacity-50 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center duration-500 text-white scale-0 group-hover:scale-100 space-y-3">
                            <h4 className="text-xl font-medium">Bird Sit On Tree</h4>
                            <p className="text-xl">Price: <span className="text-[#FFB347] ">$19</span></p>
                            <button className="bg-[#FFB347] py-1 w-2/3">Add to Cart</button>
                        </div>
                </div>

            </div>
        </section>
    );
};

export default BuyProducts;