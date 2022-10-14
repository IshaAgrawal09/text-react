import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import { Single_Action } from "../Redux/Action";
import { connect } from "react-redux";

const SingleProduct = (props) => {
  const [quantity, setQuantity] = useState("0");
  const [img, setImg] = useState(0);
  let { id } = useParams();
  useEffect(() => {
    const requestOptions = {
      headers: {
        appTag: "amazon_sales_channel",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjlkN2YwNDUxYzA3NGFhMGUxNWE4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjY1NzU2NDM5LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNDkzNGQ3MjJkNWU1MDU3ZTIwMTE1ZCJ9.rdjPySQVcVPQNC3ay3rOtXG1wLRRux5QiOX2IvH01y472L2px1NhWm70WHa89KsYafnnEZyZPej3GtWpQdVa4xWoNPYTCsrrTc1OlrOJPevYqYy9rDG8MopMP6wV-AW8dYDe1M5CEax5YAVCVZzy5Ntff9va6Ozq462pRYF5UOtME2z83hpS8asHPaPNcY9oIVVD8uJ9BGeuFExDvvjOmfY_N-nI6Fw0q7ofDVGYv6VPtcnlVurv94oGufV5I3qxC5kqdKVVLgBBLBE49wqmXho0tZwmcPC3teW6MQwduEnjlZd5KqAbvVz5CvJVqj1KKh4gcquve9lYkQ0s6VFtCw ",
        "Ced-Source-Id": "500",
        "Ced-Source-Name": "shopify",
        "Ced-Target-Id": "530",
        "Ced-Target-Name": "amazon",
      },
    };

    fetch(
      `https://multi-account.sellernext.com/home/public/connector/product/getProduct/&source_marketplace=shopify&sourceShopID=500&targetShopID=530&container_id=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((actualData) => {
        props.Single_Action(actualData.data.rows);
        console.log("single", actualData.data.rows);
        // console.log(actualData.data.rows[0].main_image.length);
      });
  }, []);

  const decrease = () => {
    if (quantity >= 1) {
      setQuantity(+quantity - 1);
    }
  };
  const increase = () => {
    setQuantity(+quantity + 1);
  };

  const imageCahnge = (event) => {
    setImg(event.currentTarget.id);
  };
  return (
    <div>
      {/* NAVBAR  */}
      <div className="singleNav">
        <p>
          <Link to="/">
            <i className="fa-solid fa-backward"></i>
          </Link>
        </p>
        <p>Home</p>
        <p>Catalog</p>
        <p>Contact</p>
        <p>
          <i className="fa-solid fa-magnifying-glass"></i>
        </p>
        <p id="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{quantity}</span>
        </p>
      </div>
      <hr />

      {props.singleData.length > 0 ? (
        <div className="showProduct">
          <div className="single_Image">
            <img src={props.singleData[img].main_image} alt="" />
          </div>

          <div className="single_Content">
            <p>{props.singleData[0].brand}</p>
            {props.singleData.length > 0
              ? props.singleData.map((item) => {
                  return (
                    <p>
                      {item.visibility === "Catalog and Search"
                        ? item.title
                        : null}
                    </p>
                  );
                })
              : null}
            <p>$48.00</p>
            <h4>Color</h4>
            <div className="color">
            {props.singleData.length > 0
            
              ? props.singleData.map((item, index) => {
                  return (
                    <div className="colorItem">
                      {item.visibility !== "Catalog and Search" ? (
                      
                          <button id={index} onClick={imageCahnge}>
                            {item.variant_title}
                          </button>
                        
                      ) : null}
                    </div>
                  );
                })
              : null}
              </div>
            <h4>Quantity</h4>
            <div className="quantity">
              <button onClick={decrease}>-</button>
              <p>{quantity}</p>
              <button onClick={increase}>+</button>
            </div>
            <div className="addCart">
              <button>Add to Cart</button>
              <button>Buy It Now</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
    //   </div>
    // </div>
  );
};
const mapStateToProps = (state) => {
  return {
    singleData: state.single.single_Product_Data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Single_Action: (val) => dispatch(Single_Action(val)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
