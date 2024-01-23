import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsvaild = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        //store the value into inputIdentifier
        // Since in input field , always get value be a string, add '+' to transform the string to number
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {inputIsvaild ? (
        <Results Input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero </p>
      )}
    </>
  );
}

export default App;
