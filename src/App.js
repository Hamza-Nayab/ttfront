import React, { createContext, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import TempData from "./components/tempdata";
import Test from "./components/test";
import Profile from "./components/profile";
import Contact from "./components/Contact";
import Submit from "./components/Submit";
import Signin from "./components/signin";
import Protected from "./auth/Protected";
import AdminUsersPage from "./Admin/Users";
import Reviews from "./components/Reviews";
import RecentReviews from "./Admin/RecentReviews";
import SellerForm from "./forms/seller";
import Listseller from "./components/Listseller";
import ProfileEditForm from "./components/ProfileEditForm";
import AdminReviews from "./Admin/Reviews";

const DataContext = createContext();

function App() {
  const [data, setData] = useState(TempData);
  const [rev, setRev] = useState(1);
  const [sale, setSale] = useState(1);

  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem("token"))
    : "";
  useEffect(() => {
    console.log(currentUser);
    console.log("TOKEN now");
    console.log(token);
  });
  return (
    <>
      <DataContext.Provider
        value={{ data, setData, rev, setRev, sale, setSale }}
      >
        <div className="container-fluid">
          <div className="row row1" style={{ marginBottom: "85px" }}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Admin"
            element={
              <Protected
                allowedStatus={["Admin", "Seller"]}
                currentUser={currentUser.status}
              >
                <Admin currentUser={currentUser.status} />
              </Protected>
            }
          />

          <Route path="/test" element={<Test />} />
          <Route
            path="/regseller"
            element={
              <Protected
                allowedStatus={["Buyer"]}
                currentUser={currentUser.status}
              >
                <SellerForm />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected
                allowedStatus={["Buyer", "Seller", "Admin"]}
                currentUser={currentUser.status}
              >
                <Profile />
              </Protected>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/submit"
            element={
              <Protected
                allowedStatus={["Admin", "Buyer", "Seller"]}
                currentUser={currentUser.status}
              >
                <Submit />
              </Protected>
            }
          />
          <Route
            path="/users"
            element={
              <Protected
                allowedStatus={["Admin"]}
                currentUser={currentUser.status}
              >
                <AdminUsersPage />
              </Protected>
            }
          />
          {currentUser.status === "Admin" ? (
            <Route path="/reviews" element={<AdminReviews />} />
          ) : (
            <Route
              path="/reviews"
              element={
                <Protected allowedStatus={["Admin"]} currentUser={currentUser}>
                  <Reviews />
                </Protected>
              }
            />
          )}
          <Route
            path="/recentreview"
            element={
              <Protected
                allowedStatus={["Seller"]}
                currentUser={currentUser.status}
              >
                <RecentReviews />
              </Protected>
            }
          />
          <Route
            path="/review"
            element={<Reviews userId={currentUser._id} />}
          />
          <Route
            path="/list"
            element={
              <Protected
                allowedStatus={["Buyer", "Seller", "Admin"]}
                currentUser={currentUser.status}
              >
                <Listseller />
              </Protected>
            }
          />
          <Route
            path="/edit"
            element={<ProfileEditForm user={currentUser} />}
          />

          <Route path="/signin" element={<Signin />} />
        </Routes>
      </DataContext.Provider>
      <div style={{ marginBottom: "-100px" }}>
        <Footer />
      </div>
    </>
  );
}

export { DataContext, App as default };
