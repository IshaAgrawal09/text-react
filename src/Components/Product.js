import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Product = (props) => {
  const view = (event) => {
    console.log(event.currentTarget.id);
  };
  return (
    <div className="productMain">
      {props.data.map((item, index) => {
        return (
          <div className="singleProduct" key={index}>
            <div className="productImage">
              <img src={item.main_image} alt="" />
            </div>
            <div className="product_info">
              <h3>{item.brand}</h3>
              <p>${item.items[0].price}.00</p>
            </div>
            <div className="product_btn">
              <Link to={`/Product/${item.container_id}`}> VIEW PRODUCT</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("data", state.all.data);
  return {
    data: state.all.data,
  };
};
export default connect(mapStateToProps)(Product);
