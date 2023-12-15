import React from "react";
import defaultImage from "../assets/Icon.png";

const Blog = (props) => {
  return (
    <div className="col-12 rounded-4 border border-primary p-4">
      <img src={defaultImage} alt="" className="w-100 rounded-4" />
      <h4 className="my-3">{props.title}</h4>
      <h6>{props.desc}</h6>
      <div className="mt-4 d-flex justify-content-between">
        <a href="#" className="text-dark h5 pt-1 d-block">
          Read more
        </a>
        <div>
          <button
            className="border-0 bg-transparent me-3"
            onClick={() => {
              console.log("object");
            }}
            style={{ color: "#718096", fontSize: "18px" }}
          >
            {props.btnEdit}
          </button>
          <button
            className="border-0 bg-transparent"
            style={{ color: "#EC0B0B", fontSize: "18px" }}
          >
            {props.btnDel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
