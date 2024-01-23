import React from "react";
import { calculateInvestmentResults } from "../util/investment";

const Results = ({ Input }) => {
  const resultData = calculateInvestmentResults(Input);

  console.log(resultData);
  return <p>Result ...</p>;
};

export default Results;
