import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/admin/sidebar.module.css";

function Sidebar(props) {
  return (
    <div className="container-fluid">
      <div><h4 className="display-6 mt-3">TrusThread</h4></div>
      <div className={styles["button-container"]} style={{width:"244px", marginLeft:"-28px"}}>
        <button className={`btn btn-primary col-12 btn-dark btn-lg h-75 ${styles.button}`}>
          <Link to="/Admin">Home</Link>
        </button>
      </div>
    
   { (props.user==="Admin") ? <div className={styles["button-container"]} style={{width:"244px", marginLeft:"-28px"}}>
        <button className={`btn btn-primary col-12 btn-dark btn-lg h-75 ${styles.button}`}>
          <Link to="/users">Users</Link>
        </button>
      </div>:null}

      { (props.user==="Admin") ?  <div className={styles["button-container"]}style={{width:"244px", marginLeft:"-28px"}}>
        <button className={`btn btn-primary col-12 btn-dark btn-lg h-75 ${styles.button}`}>
          <Link to="/reviews">Review</Link>
        </button>
      </div>:null}

      { (props.user==="Seller","Admin") ?<div className={styles["button-container"]} style={{width:"244px", marginLeft:"-28px"}}>
        <button className={`btn btn-primary col-12 btn-dark btn-lg h-75${styles.button}`}>
          <Link to="/edit">Edit Description</Link>
        </button>
      </div>:null}
      { (props.user==="Seller") ?
      <div className={styles["button-container"]} style={{width:"244px", marginLeft:"-28px"}}>
       
        <button className={`btn btn-primary col-12 btn-dark btn-lg h-75${styles.button}`}>
      
      <Link to="/recentreview">
      Recent Review
      </Link>   
        </button>
      </div>:null}

      { (props.user==="Seller") ?<div className={styles["button-container"]} style={{width:"244px", marginLeft:"-28px"}}>
        <button className={`btn btn-primary col-12 btn-dark btn-lg h-75 ${styles.button}`}>
          <Link to="/test">Preview</Link>
        </button>
      </div>:null}
    </div>
  );
}

export default Sidebar;
