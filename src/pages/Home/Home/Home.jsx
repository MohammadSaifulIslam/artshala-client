import websiteTitle from "../../../utility/websiteTitle";
import Banner from "../Banner/Banner";
import Class from "../Class/Class";
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
    </div>
  );
};

export default Home;