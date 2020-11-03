import React, { useEffect } from "react";
import { fetchData } from "../store/action";
import { connect } from "react-redux";
import StockList from "./StockList";
import Chart from "./Chart";

function Dashboard(props) {
  let { dispatch } = props;
  useEffect(() => {
    dispatch(fetchData("http://localhost:5000/api/stocks"));
  }, []);

  let { portfolioData, projection, error } = props.state;
  if (error) throw new Error(error);
  else if (!portfolioData) return <div className="loader">Loading...</div>;
  return (
    <>
      <h1 className="font-bol font-lg text-center margin">Portfolio</h1>
      <section className="dashboard sb flex container">
        <div className="sroll-y w-80">
          {portfolioData.map((stock, index) => {
            return <StockList key={index} stock={stock} />;
          })}
        </div>
        <div className="flex ac bg-gray w-20 justify-center bg-white">
          <Chart mf={projection.MF * 100} etf={projection.ETF * 100} />
        </div>
      </section>
    </>
  );
}

function mapstate(state) {
  return { state };
}

export default connect(mapstate)(Dashboard);
