import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="relative overflow-hidden bg-white min-h-screen">
      {/* 🌈 Global Aurora Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-300 opacity-20 rounded-full blur-[140px] z-0" />
      <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-indigo-300 opacity-20 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-purple-200 opacity-20 rounded-full blur-[130px] z-0" />

      {/* 👇 Main Content (on top of background) */}
      <div className="relative z-10">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
