import { useContext } from "react";
import { context } from "../../../Context/MyContext";
import "./home.css";

export default function Home() {
  const { productList, dispatch } = useContext(context);
  // console.log(productList);

  const handleIncrementClick = (id) => {
    // dispatch accept an argument of type object known as
    // action with two parameter type and payload.
    dispatch({ type: "increaseQty", payload: id });
  };

  const handleDecrementQty = (id) => {
    dispatch({ type: "decreaseQty", payload: id });
  };

  return (
    <div className="container-fluid bg-light">
      {productList.map(
        ({ id, category, description, image, price, rating, title, qty }) => {
          return (
            <div
              className="productCont d-flex justify-content-between rounded"
              key={id}
            >
              <div className="imgCont">
                <img
                  src={image}
                  alt="productImg"
                  className="productImg rounded"
                />
                <p className="title">
                  <b>Title: </b>
                  {title}
                </p>
              </div>
              <div className="productInfo">
                <p className="w-50 text-justify">
                  {" "}
                  <b> Description:</b> {description}
                </p>
                <p>
                  <b> Cateogry:</b> {category}
                </p>
                <p>
                  {" "}
                  <b> Price:</b>
                  {price}
                </p>
                <p>
                  <b> Rating: </b>⭐ {rating.rate} ({rating.count})
                </p>
                <p>
                  <b> QTY: </b>
                  {qty}
                </p>
                <div className="btnCont">
                  <button
                    className="btn btn-success mx-1"
                    onClick={() => handleIncrementClick(id)}
                  >
                    {qty == 0 ? "Buy Now" : "increaseQty"}
                  </button>
                  {qty != 0 && (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDecrementQty(id)}
                    >
                      Remove from Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
