import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Components/Home"));
const ProductDetails = lazy(() => import("./Components/ProductDetails"));
function App() {
  return (
    <div>
      <Router>
        <Suspense
          fallback={
            <img
              src=""
              style={{ padding: "50px" }}
              width="100%"
              alt="..."
            ></img>
          }
        >
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/productDetails"
              element={<ProductDetails />}
            ></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
