import "./style.css";
import m1 from "../Img/m1.jpg";

function AboutRight() {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={m1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title">We Help</h1>
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
        </div>
      </div>
    </>
  );
}

export default AboutRight;
