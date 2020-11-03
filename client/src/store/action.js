import { FETCH_PORTFOLIO, ERROR } from "./types";

function fetchPortfolio(payload) {
  return {
    type: FETCH_PORTFOLIO,
    payload,
  };
}

function fetchPortfolioError() {
  return {
    type: ERROR,
  };
}

export function fetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => dispatch(fetchPortfolio(res)))
      .catch((err) => dispatch(fetchPortfolioError()));
  };
}
