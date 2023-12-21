import Adminedit from "./Adminedit";
import Adminhome from "./Adminhome";
import Counter from "./Counter";
import Sidebar from "./Sidebar";

function Admin(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ height: "90vh" }}>
          <div
            className="col-md-2 "
            style={{
              height: "800px",
              backgroundColor: "#FFD600",
              marginTop: "-15px",
            }}
          >
          <Sidebar user={props.currentUser} />
          </div>
          <div className="col-md-9">
            <Adminhome  user={props.currentUser}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
