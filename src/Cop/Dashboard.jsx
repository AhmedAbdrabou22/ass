import React from "react";

const Dashboard = () => {
  return (
    <div className="px-5">
      <div
        className="col-11 pt-2 text-white"
        style={{ backgroundColor: "#0062FF", borderRadius: "0 0 15px 15px" }}
      >
        <h1 className="fs-2 py-5 ms-4 mb-3">Dashboard</h1>

        <div className="mt-2 mb-3 d-flex flex-column ms-4">
          <h1 className="fs-2">
            <a href="" className="text-decoration-none text-white">
              users
            </a>
          </h1>
          <a href="#" className="text-decoration-none text-white">
            all users
          </a>
          <a href="#" className="text-decoration-none text-white">
            add new
          </a>

          <h2 className="fs-2 mt-2">
            <a href="" className="text-decoration-none text-white">
              blogs
            </a>
          </h2>
          <a href="#" className="text-decoration-none text-white">
            all blogs
          </a>
          <a href="#" className="text-decoration-none text-white">
            add new
          </a>
          <h2 className="fs-3">
            <a href="" className="text-decoration-none text-white">
              services
            </a>
          </h2>
          <a href="#" className="text-decoration-none text-white">
            unread
          </a>
          <a href="#" className="text-decoration-none text-white">
            ongoing
          </a>
          <a href="#" className="text-decoration-none text-white">
            all services
          </a>
          <h2 className="fs-3 mt-3">
            <a href="" className="text-decoration-none text-white">
              analytics
            </a>
          </h2>
          <h2 className="fs-3 mt-2">
            <a href="" className="text-decoration-none text-white">
              settings
            </a>
          </h2>
        </div>

        <div>
          <button className="btn btn-dark col-12 py-3 fs-4 mt-3">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
