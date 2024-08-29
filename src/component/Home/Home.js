import React, { useEffect } from "react";
import ProductCard from "./ProductCard.js";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { clearErrors, getProduct } from "../../actions/productAction.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error.response.data.error);
      dispatch(clearErrors());
    } else {
      dispatch(getProduct());
    }
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Tru Goods || Home" />
          <div className="banner">
            <p>Welcome to Tru Goods</p>
            <h1>GET EVERYTHING YOU NEED BELOW</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
