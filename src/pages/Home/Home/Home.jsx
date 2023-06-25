import websiteTitle from "../../../utility/websiteTitle";
import Banner from "../Banner/Banner";
import Class from "../Class/Class";
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
      <Contact title={true}/>
    </div>
  );
};

export default Home;