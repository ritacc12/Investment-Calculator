import React from "react";
//import { useState } from "react";

const UserInput = () => {
  //   const [userInput, setUserInput] = useState({
  //     initialInvestment: 10000,
  //     annualInvestment: 1200,
  //     expectedReturn: 6,
  //     duration: 10,
  //   });

  //   function handleChange(inputIdentify, newValue) {
  //     setUserInput((preUserInput) => {
  //       return {
  //         ...preUserInput,
  //         [inputIdentify]: newValue,
  //       };
  //     });
  //   }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" required></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
