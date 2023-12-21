import img from "../Img/u2.png";

function Contact() {
  return (
    <>
      <div className="container mt-5" style={{height :"80vh"}}>
        <div className="row" style={{marginTop :"150px"}}>
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit "
                className="btn btn-dark "
                style={{ width: "200px" }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6" style={{ marginLeft: "" }}>
            <img src={img} alt="Contact Us Image" className="img-fluid " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
