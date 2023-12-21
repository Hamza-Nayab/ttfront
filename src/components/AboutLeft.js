import "./style.css";
import m2 from "../Img/m2.jpg";

function AboutLeft() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">About Us</h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
          </div>
          <img src={m2} className="card-img-top" alt="..." />
        </div>
      </div>
    </>
  );
}

export default AboutLeft;
