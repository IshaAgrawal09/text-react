import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Data_Action } from "../Redux/Action";
import About from "./About";
import Footer from "./Footer";
import "./Home.css";
import Nav from "./Nav";
import Product from "./Product";

const Home = (props) => {
  const [mainData, setMainData] = useState([]);

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
      `https://multi-account.sellernext.com/home/public/connector/product/getRefineProducts/&count=6&productOnly=true& target_marketplace=eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9`,
      requestOptions
    )
      .then((response) => response.json())
      .then((actualData) => {
        sessionStorage.setItem(
          "mainData",
          JSON.stringify(actualData.data.rows)
        );
        props.Data_Action(actualData.data.rows);
        setMainData(actualData.data.rows);
      });
  }, []);

  return (
    <div>
      <Nav />
      <Product />
      <About />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("data", state.all.data);
  return {
    data: state.all.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Data_Action: (value) => dispatch(Data_Action(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
