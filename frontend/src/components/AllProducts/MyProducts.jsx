import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/ContextContainer";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/ProductsCSs/MyProducts.css";

const MyProducts = () => {
  const [ownProducts, setOwnProducts] = useState([]);

  const { state } = useContext(MyContext);

  const route = useNavigate();

  useEffect(() => {
    if (state?.user?.role != "Seller") {
      route("/");
    }
  }, [state]);

  useEffect(() => {
    async function getOwnProducts() {
      try {
        const token = JSON.parse(localStorage.getItem("shoppingToken"));

        const response = await axios.post("http://localhost:8000/ownproducts", {
          token,
        });

        if (response.data.success) {
          setOwnProducts(response.data.yourProducts);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getOwnProducts();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      const token = JSON.parse(localStorage.getItem("shoppingToken"));

      const response = await axios.post(
        "http://localhost:8000/delete-product",
        { productId, token }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setOwnProducts(response.data.products);
        // route("/allproducts");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="myProductsContainer">
        <h1 style={{ textAlign: "center" }}>My Products</h1>

        {ownProducts?.length ? (
          <div className="myProductsSection">
            {ownProducts?.map((prod) => (
              <div className="myProductsSingleSection" key={prod._id}>
                <div className="myProductsImage">
                  <img src={prod.image} alt="" />
                </div>
                <div className="myProductsDetails">
                  <h2>{prod.title.slice(0, 20)}...</h2>
                  <h2>Rs.{prod.price}</h2>
                  <h2>{prod.category}</h2>
                  <div className="updateBtn">
                    <button onClick={() => route(`/updateproduct/${prod._id}`)}>
                      Update Product
                    </button>
                  </div>

                  <div className="deleteMyProductBtn">
                    <button onClick={() => deleteProduct(prod._id)}>
                      Delete Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>no products</div>
        )}
      </div>
    </>
  );
};

export default MyProducts;