import React from "react";
import "../scss/app.scss";
import Istock from "../media/istock-alipart.png";

function StockList(props) {
  let { stock } = props;
  return (
    <>
      <div className="flex bg-white margin padding w-100 font-sm sb">
        <div className="w-20 padding bg-gray flex ac">
          <i className="w-10 font-col-gray fas fa-bars"></i>
          <div className="w-40 flex justify-center">
            <p>{stock.scrip}</p>
            <p className="font-col-blue font-bold font-m">${stock.price}</p>
          </div>
          <div className="w-30 flex justify-center">
            <img className="list-img" src={Istock} alt="" />
            <p>{stock.type}</p>
          </div>
        </div>
        <div className="w-25 padding bg-gray flex ac">
          <div className="flex">
            <div className="w-100 flex">
              <p className="w-78 font-col-gray ">
                <i className="fas fa-layer-group"></i> Quantity
              </p>
              <p className="w-20">{stock.quantity}</p>
            </div>
            <div className="w-100 flex">
              <p className="w-78 font-col-gray ">
                <i className="fas fa-at"></i> Average Cost
              </p>
              <p className="w-20">${stock.avgCost}</p>
            </div>
            <div className="w-100 flex ">
              <p className="w-78 font-col-gray ">
                <i className="fas fa-money-bill-wave"></i> Invested Amount
              </p>
              <p className="w-20 ">
                $
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(stock.investedAmt)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-20 padding bg-gray flex ac">
          <div className="w-100 flex sb ">
            <p className="font-col-black">Market Value</p>
            <p>
              $
              {new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(stock.marketVal)}
            </p>
          </div>
          <div className="w-100 flex sb ">
            <p className="font-col-gray">% of portfolio</p>
            <p>{stock.percentageInvested}%</p>
          </div>
          <div className="w-100 bar-outer">
            <div
              className="bar-inner "
              style={{ width: `${stock.percentageInvested}%` }}
            ></div>
          </div>
        </div>
        <div className="w-20 padding bg-gray flex ac">
          <div className="w-100 flex sb">
            <p>Unrealised P/L</p>
            <p>
              {stock.unrealisedProfitLoss < 0
                ? `-$${stock.unrealisedProfitLoss * -1}`
                : `$${stock.unrealisedProfitLoss}`}
            </p>
          </div>
          <div className="w-100 flex sb">
            <p className="font-col-gray">% Return</p>
            <p>
              {stock.returns > 0 ? (
                <i className="fas fa-caret-up"></i>
              ) : (
                <i className="fas fa-caret-down"></i>
              )}{" "}
              {stock.returns} %
            </p>
          </div>
          <div className="w-100 bar-outer pos-rel">
            <div
              className={
                stock.returns > 0
                  ? "bar-pos-inner pos-50"
                  : "bar-neg-inner pos-50"
              }
              style={
                stock.returns > 0
                  ? {
                      width: `${stock.returns / 2}%`,
                    }
                  : {
                      width: `${(stock.returns * -1) / 2}%`,

                      marginLeft: `${stock.returns / 2}%`,
                    }
              }
            ></div>
          </div>
        </div>
        <div className="w-10 padding">
          <button className="btn">BUY</button>
          <button className="btn">SELL</button>
        </div>
      </div>
    </>
  );
}

export default StockList;
