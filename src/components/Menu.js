import "./style.css";
import cad1 from "../Img/u1.png";
import cad2 from "../Img/u2.png";
import cad3 from "../Img/t.png";

function Menu() {
  const data = [
    {
      title: "Total Users",
      number: "15K",
      image: cad3,
    },
    {
      title: "Total Sellers",
      number: "2K",
      image: cad3,
    },
    {
      title: "Total Deals",
      number: "10K",
      image: cad3,
    },
    {
      title: "Total Reviews",
      number: "9K",
      image: cad3,
    },
  ];

  return (
    <>
      <div
        className="container-fluid"
        style={{
          height: "105vh",
          width: "100vw",
          marginBottom: "100px",
          padding: "10px",
          backgroundColor: "#FFDE59",
          marginLeft:"-10px",
          
        }}
      >
        <div className="container">
          <div className="row" style={{height :"50vh"}}>
            <div className="col-md-6" style={{ backgroundColor: "#FFDE59" , height:"50vh"}}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="p-4 me-0">
                  <h1>Who are We</h1>
                  <h2>a platform where you can trust the reviews</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla condimentum tortor in justo pulvinar, id bibendum urna
                    hendrerit. Aliquam erat volutpat. Etiam sagittis in sapien
                    nec sagittis. Phasellus ut varius metus. Vivamus venenatis
                    massa nec dolor interdum, vel euismod elit tempor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex justify-content-center align-items-center" style={{height :"50vh"}}>
                <img
                  src={cad1}
                  alt="Image 2"
                  className="img-fluid rounded"
                  style={{ maxHeight: "100%", width: "100%", marginLeft:"-25px" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-items-center h-100 rounded" style={{height :"50vh"}}>
                <img
                  src={cad2}
                  alt="Image 3"
                  className="img-fluid rounded"
                  style={{ maxHeight: "100%", maxWidth: "100%",marginRight:"-25px", height:"50vh"}}
                  
                />
              </div>
            </div>
            <div className="col-md-6" style={{ backgroundColor: "" }}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="p-4">
                  <h1>How do we help</h1>
                  <h2>By being the mediator</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla condimentum tortor in justo pulvinar, id bibendum urna
                    hendrerit. Aliquam erat volutpat. Etiam sagittis in sapien
                    nec sagittis. Phasellus ut varius metus. Vivamus venenatis
                    massa nec dolor interdum, vel euismod elit tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ height: "80vh", width: "", marginTop: "-40px" }}
      >
        <div className="row h-100" style={{ padding: "" }}>
          {data.map((dt) => (<>
            
              <div
                className="col-md-3 d-flex align-items-center justify-content-center rounded border"
                style={{ backgroundColor: "#FFD600", height: "150px", padding:"" }}
              >
                <div className="text-center">
                  <h2>{dt.title}</h2>
                  <h3>{dt.number}</h3>
                </div>
              </div>
              </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;