import Carousel from "./Carousel";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import Menu from "./Menu";
import Footer from "./Footer";
import Frontimg from "./Frontimg";
import Review from "./review";
import Review2 from "./review2";

function Home() {
  return (
    <>
    <div>
      <Frontimg />
      </div>
      <div className="container-fluid" style={{height: "145vh", marginTop: "40px"}}>
          <Menu />
      </div>

      <Review />
      <Review2 />
      


      
    </>
  );
}

export default Home;
