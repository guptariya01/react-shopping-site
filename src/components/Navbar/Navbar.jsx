 import React, { useContext, useEffect, useState } from "react";
import { context } from "../../../Context/MyContext";

export default function Navbar() {
  const { productList } = useContext(context);
  console.log(productList);
  const [totalQty, updateTotalQty] = useState(0);

  useEffect(() => {
    let total = 0;
    const calcTotalQty = () => {
      total += productList.reduce((prevVal, curObj) => {
        console.log(prevVal, curObj);
        return prevVal + curObj.qty;
      }, 0);
      updateTotalQty(total);
    };
    calcTotalQty();
  }, [productList]);

  return (
    <div className="container-fluid" style={{ backgroundColor: "teal" }}>
      <div className="container-fluid d-flex justify-content-between align-items-center p-2">
        <div className="logoCont fs-3 fw-bold">ApniDukaan</div>
        <ul className="d-flex justify-content-between align-items-center">
          <li className="mx-3 list-inline-item">Home</li>
          <li className="mx-3 list-inline-item list-item">About US</li>
          <li className="mx-3 list-inline-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              UserInfo
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Log In
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Register
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Help
                </a>
              </li>
            </ul>
          </li>
          <li
            className="mx-3 list-inline-item list-item"
            style={{ position: "relative" }}
          >
            🛒{" "}
            <span
              style={{
                position: "absolute",
                top: "-0.5rem",
                right: "0.1rem",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            >
              {totalQty}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
