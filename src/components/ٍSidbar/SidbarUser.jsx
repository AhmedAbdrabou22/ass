import { NavLink } from "react-router-dom";

const sidbarUser = () => {
  return (
    <div className="px-5 sidbarAdmin">
      <div
        className="col-11 pt-2 text-white"
        style={{ backgroundColor: "#0062FF", borderRadius: "0 0 15px 15px" }}
      >
        <h1 className="fs-2 py-5 ms-4 mb-3">Dashboard</h1>

        <div className="mt-2 mb-3 d-flex flex-column ms-4">
          <h1 className="my-1  fs-2">
            <h2  className="my-1 text-decoration-none text-white">
              Papers
            </h2>
          </h1>
          <NavLink to="/user" className="text-decoration-none  text-white">
            Personal Papers
          </NavLink>
          <NavLink to="/user/companyPapers" className="text-decoration-none text-white">
           Company Papers
          </NavLink>
          <h2 className="my-1  fs-2 mt-2">
            <h2  className=" my-1 text-decoration-none text-white">
              Services
            </h2>
          </h2>
          <NavLink to="/user/allServices" className="text-decoration-none text-white">
          request new service
          </NavLink>
          <NavLink to="/user/ongoing" className="text-decoration-none text-white">
          ongoing
          </NavLink>
          <NavLink to="/user/allServices" className="text-decoration-none text-white">
          all services
          </NavLink>
          <h2 className="my-1 fs-3 mt-2">
            <NavLink to="/setting" className="text-decoration-none text-white">
              settings
            </NavLink>
          </h2>
        </div>

        <div>
          <button className="btn btn-dark col-12 py-3 fs-4 mt-3" >Logout</button>
        </div>
      </div>
    </div>
  );
};

export default sidbarUser;
