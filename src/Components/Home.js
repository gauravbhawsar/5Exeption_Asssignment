import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "react-js-pagination";
function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [productCount, setproductCount] = useState(1);
  const navigate = useNavigate();
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    axios
      .get(
        `https://staging.latv.com/other/wp-json/v1/get-home-page-posts?page_no=${currentPage}`
      )
      .then((res) => {
        setPosts(res.data.data);
        setproductCount(res.data.pagecount * 9);
        console.log(res.data);
      });
  }, [currentPage]);
  return (
    <>
      <div>
        <div className="container my-5" style={{ border: "1px solid grey" }}>
          <h1 className="text-center my-5" style={{ color: "blue" }}>
            TRENDING ARTICLES
          </h1>
          <div>
            <div className="container pb-3">
              {posts.map((p) => (
                <div className="row mx-2 px-3 my-4">
                  <div className="col-3">
                    <img
                      onClick={() => navigate("/productDetails", { state: p })}
                      src={p.post_image.custom_image_url}
                      alt="Not Found"
                      width="200"
                      height="200"
                    ></img>
                  </div>
                  <div className="col-6">
                    <h5 style={{ color: "blue" }}>{p.meta_description}</h5>
                    <div>{p.post_category[0].cat_name}</div>
                  </div>
                  <div class="col-3">
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      {p.publish_date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              activePage={currentPage}
              totalItemsCount={productCount}
              onChange={setCurrentPageNo}
              prevPageText="<"
              nextPageText=">"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
