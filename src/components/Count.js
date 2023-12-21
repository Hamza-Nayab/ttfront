function Count({ p, q, r }) {
  return (
    <>
      <div
        className="container-fluid "
        style={{ height: "30%", marginTop: "-300px" }}
      >
        <div className="row">
          <div
            className="col-md-3 d-flex align-items-center justify-content-center rounded"
            style={{ backgroundColor: "#FFEB3B", height: "150px" }}
          >
            <div className="text-center">
              <h2>Total Reviews</h2>
              <h3>{p}</h3>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-3 d-flex align-items-center justify-content-center rounded"
            style={{ backgroundColor: "#FFD600", height: "150px" }}
          >
            <div className="text-center">
              <h2>Total Sales</h2>
              <h3>{q}</h3>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-3 d-flex align-items-center justify-content-center rounded"
            style={{ backgroundColor: "#FFC107", height: "150px" }}
          >
            <div className="text-center">
              <h2>Total Earning</h2>
              <h3>{q * p}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Count;
