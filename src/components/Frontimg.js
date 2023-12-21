import { Link } from "react-router-dom";
import img from "../Img/f1.jpg";
import video from "../Img/sunset.mp4";
function Frontimg() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-90 vw-97 "
        style={{ marginTop: "-10px" }}
      >
        <div className="position-relative">
          <video
            autoPlay
            loop
            muted
            className="video-fluid rounded"
            style={{ width: "100vw", height: "90vh", borderRadius: "50%"}}
          >
            <source src={video} type="video/mp4" />
          </video>
          <div
            className="position-absolute bottom-0 end-0 p-2 text-white"
            style={{ margin: "50px" }}
          >
            <div
              style={{
                marginRight : "30px",
                width: "450px",
                height: "70px",
                background: "black",
                border: "1px solid black",
                borderRadius: "24px",
                padding: "10px 12px",
                fontSize: "16px",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                style={{
                  border: "none",
                  width: "80%",
                  background: "transparent",
                  color: "white",
                  fontSize: "16px",
                  outline: "none",
                }}
                placeholder="Search a Seller"
              />
              <button
                style={{
                  borderLeft: "1px solid #333",
                  borderRadius: "0 24px 24px 0",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "8px 10%",
                }}
              >
                <Link to="/list">
                <span style={{ color: "#FFDE59" }}>Search?</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontimg;
