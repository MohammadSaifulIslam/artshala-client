import websiteTitle from "../../../utility/websiteTitle";
import Banner from "../Banner/Banner";
import BuyProducts from "../BuyProducts/BuyProducts";
import Class from "../Class/Class";
import ClientReview from "../ClientReview/ClientReview";
import Contact from "../Contact/Contact";
import DiscountClasses from "../DiscountClasses/DiscountClasses";
import Instructors from "../Instructor/Instructors";
import StudentsWork from "../StudentsWork/StudentsWork";

const Home = () => {
  websiteTitle('Home - Artshala')

  return (
    <div>
      <Banner />
      <Class/>
      <Instructors/>
      <StudentsWork/>
      <DiscountClasses/>
      <BuyProducts/>
      <ClientReview/>
      <Contact title={true}/>
    </div>
  );
};

export default Home;