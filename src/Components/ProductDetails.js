import React from "react";
import { useLocation } from "react-router-dom";
function ProductDetails() {
  const location = useLocation();
  console.log(location.state);
  const post = location.state;
  return (
    <>
      <div
        className="container text-left mt-5"
        style={{ border: "1px solid grey", width: 700 }}
      >
        <div className="">
          <h5 className="mt-4 mb-2">{post.meta_title}</h5>
          <div>
            <img
              src={post.post_image.custom_image_url}
              widht="400"
              height="300"
            ></img>
          </div>
          <div>
            <h5 className="my-3">
              <span style={{ color: "blue" }}>
                {post.post_category[0].cat_name}
              </span>{" "}
              | {post.author_name}{" "}
              <span style={{ color: "blue" }}>{post.publish_date}</span>
            </h5>
          </div>
          <div>
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              {post.short_description}
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
